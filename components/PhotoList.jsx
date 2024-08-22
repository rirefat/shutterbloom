import PhotoCard from "./PhotoCard";


const PhotoList = ({ photos }) => {
    return (
        <div class="img-grid">
            {
                photos.map((photo) => <PhotoCard key={photo.id} photo={photo} />)
            }
        </div>
    );
};

export default PhotoList;