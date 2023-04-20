import { SearchBar } from '@/components/SearchBar'
import { SideBar } from '@/components/SideBar'
import { Slider } from '@/components/Slider'
import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <div className='flex bg-background'>
        <SideBar />
        <div className='w-containerSection'>
          <SearchBar />
          <Slider sectionTitle={"Featured Playlists"} isDetailed={true}/>
          <Slider sectionTitle={"Playlists Categorys"} isDetailed={false}/>
        </div>
      </div>
    </main>
  )
}
