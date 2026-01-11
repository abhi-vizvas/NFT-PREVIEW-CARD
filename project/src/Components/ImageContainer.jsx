import mainImage from '../../public/image-equilibrium.jpg'

export default function () {
    return <>
        <div className="image-container h-[300px] width-full overflow-hidden rounded-2xl">
            <img src={mainImage} />
        </div>
    </>
}