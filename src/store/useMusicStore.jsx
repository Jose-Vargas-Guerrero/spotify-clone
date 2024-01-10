import { create } from "zustand";

const useMusicStore = create((set) => ({
    image: '',
    name: '',
    artist: '',
    track: '',
    handleChangeTrack : (image,name,artist, track) => set({
        name: name, image: image, artist: artist, track: track
    })
}))

export default useMusicStore