import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: '100px auto'
}

const Spinner = () => {
    return (
        <ClipLoader
            color='#4338ca'
            loading={true}
            cssOverride={override}
            size={150}
        />
    )
}

export default Spinner;
