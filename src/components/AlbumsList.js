import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import Skeleton from './Skeleton';
import Button from './Button';
import AlbumsListItem from "./AlbumsListItem";

export default function AlbumsList({ user }) {
    const { data, error, isFetching } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();
    
    const handleAddAlbum = () => {
        addAlbum(user);
    }

    let content;
    if (isFetching) {
        content = <Skeleton className="h-10 w-full" times={3} />
    } else if (error) {
        content = <div>Error loading albums.</div>
    } else {
        content = data.map(album => {
            return <AlbumsListItem key={album.id} album={album} />
        })
    }

    return (
        <div>
            <div className="flex flex-row justify-between items-center m-2">
                <h3 className="text-lg font-bold">
                    Album for {user.name}
                </h3>
                <Button onClick={handleAddAlbum} loading={results.isLoading}>+ Add Album</Button>
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}
