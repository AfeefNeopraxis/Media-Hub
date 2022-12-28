import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase_utils";

import { createContext, useEffect, useReducer, useRef } from "react";
import { auth } from "../firebase_utils";
import { pageConverter, pageData } from "../../model/pageData";
import { userConverter, userData } from "../../model/userData";
import Center from "../../components/Common/Center";
import InputText from "../../components/Common/FormInputs";
import Button from "../../components/Common/Button";
import { saveUserData } from "../firestore_utils";


type Action =
    { type: "pageFetchInitialized" } |
    { type: "userFetched", user: userData | null } |
    { type: "pageFetchCompleted", page: (pageData & { id: string, orgId: string }) };

type State = {
    user: userData | null,
    currentPage: (pageData & { id: string, orgId: string }) | null,
    allFetchedPages: (pageData & { id: string, orgId: string })[],
    isPageLoading: boolean,
    isUserLoading: boolean,
};

const initialValue: State = {
    user: null,
    currentPage: null,
    allFetchedPages: [],
    isPageLoading: false,
    isUserLoading: true,
}

// Create the context object and specify the type for the value
export const AppContext =
    createContext<State & { fetchPage: (pageId: string, organizationId: string) => void, }>({
        ...initialValue, fetchPage: () => { },
    });



const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "pageFetchInitialized":
            return { ...state, isPageLoading: true, currentPage: null };
        case "pageFetchCompleted":
            state.allFetchedPages.push(action.page)
            return { ...state, isPageLoading: false, currentPage: action.page }
        case "userFetched":
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
            dispatch({ type: "userFetched", user: user })
        } else {
            // doc.data() will be undefined in this case
            dispatch({ type: "userFetched", user: null })
        }
    }

    // function to fetch the page data from firestore
    // supply the page data on demand
    const fetchPage = async (pageId: string, orgId: string) => {
        dispatch({ type: "pageFetchInitialized" })
        // All once fetched pages from firestore is stored in "pages" variable
        // So, when the user demands a page, first check whether it is already fetched or not
        // It may be in already available in pages variable


        var page = state.allFetchedPages.find(page => page.id === pageId && page.orgId === orgId)
        if (page) {
            // return page;
        }


        // App has not yet fetched the page data with current values in pageId and orgId
        // Lets get it from firestore
        // const fetchData = async () => {
        const docRef = doc(db, "organization", orgId, "pages", pageId).withConverter(pageConverter);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

            const page = docSnap.data();


            dispatch({ type: "pageFetchCompleted", page: { ...page, id: pageId, orgId: orgId } })
        } else {
            // doc.data() will be undefined in this case
        }
        // };
        // fetchData();

    }

    useEffect(() => {
        fetchUser();
    }, [])


    return (
        <AppContext.Provider value={{ fetchPage, ...state }}>

            {state.isUserLoading && (
                <Center fullScreen>
                    <p>
                        Fetching User Data</p>
                </Center>)}

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

            {!state.isUserLoading && state.user && children}

        </AppContext.Provider>
    )
}


export default AppContextProvider;