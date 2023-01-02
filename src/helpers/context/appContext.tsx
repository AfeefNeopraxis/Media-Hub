import { getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase_utils";

import { createContext, useEffect, useReducer, useRef } from "react";
import { auth } from "../firebase_utils";
import { pageConverter, pageData } from "../../model/pageData";
import { userConverter, userData } from "../../model/userData";
import Center from "../../components/Common/Center";
import InputText from "../../components/Common/FormInputs";
import Button from "../../components/Common/Button";
import { createPage, saveUserData } from "../firestore_utils";
import { idName } from "../../model/idAndName";


type Action =
    { type: "pageFetchInitialized" } |
    { type: "updateUser", user: userData | null } |
    { type: "pageFetchCompleted", page: (pageData & { id: string, orgId: string }) };

type State = {
    user: userData | null,
    currentPage: (pageData & { id: string, orgId: string }) | null,
    allFetchedPages: Set<pageData & { id: string, orgId: string }>,
    isPageLoading: boolean,
    isUserLoading: boolean,
};

const initialValue: State = {
    user: null,
    currentPage: null,
    allFetchedPages: new Set(),
    isPageLoading: false,
    isUserLoading: true,
}

// Create the context object and specify the type for the value
export const AppContext =
    createContext<
        State & {
            fetchPage: (pageId: string) => void,
            createPage: (pageName: string) => void,
        }
    >({
        ...initialValue, fetchPage: () => { }, createPage: () => { },
    });



const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "pageFetchInitialized":
            return { ...state, isPageLoading: true, currentPage: null };
        case "pageFetchCompleted":
            state.allFetchedPages.add(action.page)
            return { ...state, isPageLoading: false, currentPage: action.page }
        case "updateUser":
            return { ...state, isUserLoading: false, user: action.user }
        default:
            throw new Error();
    }
};



const AppContextProvider = ({ children }: { children: React.ReactNode }) => {

    const organizationNameRef = useRef<HTMLInputElement>(null);
    const [state, dispatch] = useReducer<(state: State, action: Action) => State>(reducer, initialValue);

    // function to fetch the user data from firestore
    const fetchUser = async () => {
        const docRef = doc(db, "users", auth.currentUser?.uid ?? "").withConverter(userConverter);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const user = docSnap.data();
            dispatch({ type: "updateUser", user: user })
        } else {
            // doc.data() will be undefined in this case
            dispatch({ type: "updateUser", user: null })
        }
    }

    // function to fetch the page data from firestore
    // supply the page data on demand
    const fetchPage = async (pageId: string,) => {

        var orgId = state.user?.organizations?.at(0)?.id
        dispatch({ type: "pageFetchInitialized" })
        // All once fetched pages from firestore is stored in "pages" variable
        // So, when the user demands a page, first check whether it is already fetched or not
        // It may be in already available in pages variable

        var page = Array.from(state.allFetchedPages).find(page => page.id === pageId && page.orgId === orgId)

        if (page) {
            dispatch({ type: "pageFetchCompleted", page })
            return;
        }


        // App has not yet fetched the page data with current values in pageId and orgId
        // Lets get it from firestore
        // const fetchData = async () => {
        const docRef = doc(db, "organizations", `${orgId}`, "pages", pageId).withConverter(pageConverter);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const page = docSnap.data();

            dispatch({ type: "pageFetchCompleted", page: { ...page, id: pageId, orgId: orgId! } })

        } else {
            // doc.data() will be undefined in this case
        }
        return;
    }

    useEffect(() => {
        fetchUser();
    }, [])

    const createFirebasePage = async (pageName: string) => {
        var pageId = await createPage(pageName, state.user!.organizations!.at(0)!.id)
        const pageIdName: idName = { id: pageId, name: pageName };

        state.user?.organizations?.at(0)?.pages?.push(pageIdName)

        // this is just rewriting all the content of the user
        // this works fine now, but sometimes it will effect the smooth behaviour
        const currentUserDoc = doc(db, "users", `${auth.currentUser?.uid}`);
        setDoc(currentUserDoc, { ...state.user })

        dispatch({ type: "updateUser", user: state.user })
    }

    return (
        <AppContext.Provider value={{
            fetchPage, ...state, createPage: createFirebasePage
        }}>
            {/* currently loading the user data */}
            {state.isUserLoading && (
                <Center fullScreen>
                    <p>
                        Fetching User Data</p>
                </Center>)}

            {/* loading completed but no user availble, so prompt to create the organization */}
            {!state.isUserLoading && !state.user && (
                <Center fullScreen>
                    <form
                        onSubmit={async (e) => {
                            e.preventDefault();
                            await saveUserData(organizationNameRef.current!.value);
                            fetchUser();
                        }}
                    >
                        <InputText
                            label="Organization Name"
                            inputRef={organizationNameRef}
                            required
                        />
                        <Center>
                            <Button label="Save" />
                        </Center>
                    </form>
                </Center>)}

            {/* We have got the user and loading completed, Now we can show him the dashboard */}
            {!state.isUserLoading && state.user && children}

        </AppContext.Provider>
    )
}


export default AppContextProvider;