import Button from '../Common/Button'
import Center from '../Common/Center'

const NoPage = () => {
  return (
    <>
    <Center>
      <div className="flex flex-col items-center bg-[#ffffff]">
        <div className="text-amber-500">
        <h1 className="text-9xl font-extrabold text-amber-500 tracking-widest">404</h1>
        <p className='font-bold text-lg text-center pb-4'>page not found !</p>
        </div>
          <Button label="Back To Home"/>
      </div>
    </Center>
    </>
  )
}

export default NoPage