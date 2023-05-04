import { playlistIdState } from "@/atoms/playlistAtom";
import Image from "next/image"
import Link from "next/link";
import { useRecoilState } from "recoil";

type Props = {
    playlist: SpotifyApi.PlaylistObjectSimplified
}

export const Card = ({playlist}: Props) => {

    const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

    function handlePlaylist(playlistId: string) {
        setPlaylistId(playlistId)
    }

    return (
        <Link href={`/playlist/${playlist.id}`} onClick={() => handlePlaylist(playlist.id)}>
            <div className="h-80 w-52 py-2 drop-shadow-2xl rounded-3">
                <div className="h-72">
                    <div className="w-full rounded-3">
                        <Image src={playlist.images[0].url} alt="card-image" width={208} height={208} className="rounded-3" />
                    </div>
                    <div className="w-full h-20 pt-4">
                        <h3 className="text-slate-50 font-semibold text-sm leading-5 mb-1">{playlist.name}</h3>
                        <h4 className="text-gray-400 font-semibold text-xs leading-5 truncate">{playlist.description}</h4>
                        <span className="text-gray-400 font-semibold text-10 leading-3">{playlist.type.toUpperCase()}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}