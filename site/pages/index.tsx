import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title='home'>
      <div className='max-w-7xl mx-auto px-8 mt-8 mb-32'>
        <div className='mt-40'>
          <h2 className='max-w-fit mx-auto text-xl text-slate-800 font-light mb-3'>
            Climate Knowledge Portal for Climate Actions and Adaptions
          </h2>
          <h2 className='max-w-fit mx-auto text-3xl text-slate-800 font-bold'>
            Climate Knowledge Portal for Climate Actions and Adaptions
          </h2>
          <div className='max-w-fit mx-auto mt-8'>
            <Link href='/resource/data'>
              <button className='mx-auto w-36 border-slate-600 border-2 bg-gray-900 hover:bg-slate-400 font-medium  mr-4 py-2 px-3 text-white hover:text-black'>
                Explore
              </button>
            </Link>
            <Link href='https://github.com/okfnepal/climate'>
              <button className='w-36 border-slate-600 border-2 bg-white text-slate-800 font-medium py-2 px-3 hover:bg-gray-300 hover:text-slate-500'>
                Get Involved
              </button>
            </Link>
          </div>
        </div>
        <div className='mt-10'>
        </div>
      </div>
    </Layout>
  )
}

export default Home
