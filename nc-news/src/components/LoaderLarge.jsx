import { Spinner } from "react-bootstrap";
const LoaderLarge = ({content}) => {

    return (
        <section className="w-100 spinner_section_lg d-flex flex-column align-items-center justify-content-center">
            <Spinner animation="border" role="status" className="mb-3" />
            <p>{content}</p>
        </section>
    )

}

export default LoaderLarge;