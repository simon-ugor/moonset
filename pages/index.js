
import Image from "next/image"

const index = () => {
    return (
        <div className="App">
            <div className="coming-soon-div">
                <h3 className="coming-soon">Coming soon.</h3>
                <div className="image-div">
                    <Image
                        src="/pizza-cutout.png"
                        alt="sun"
                        width={60}
                        height={49}
                        className="image"
                    />
                </div>
            </div>
        </div>
    )
}

export default index