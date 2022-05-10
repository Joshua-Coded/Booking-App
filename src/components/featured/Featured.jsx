import './featured.css';

export default function Featured() {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <img src='https://cf.bstatic.com/xdata/images/city/square250/815261.webp?k=96c6465292cad5f9afffb2925a9f76b126d4675423300a6e63917f1fcf459a19&o=' atl='' className='featuredImg' />
                <div className='featuredTitles'>
                    <h1>Ikeja</h1>
                    <h2>545465 properties</h2>
                </div>
            </div>

            <div className='featuredItem'>
                <img src='https://cf.bstatic.com/xdata/images/city/square250/684500.webp?k=df54bcea224564a0a00497a2076d5338316a0b56692498eddb3c02c9a6cdde64&o=' atl='' className='featuredImg' />
                <div className='featuredTitles'>
                    <h1>Lagos</h1>
                    <h2>55454465 properties</h2>
                </div>
            </div>

            <div className='featuredItem'>
                <img src='https://cf.bstatic.com/xdata/images/city/square250/822312.webp?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o=' atl='' className='featuredImg' />
                <div className='featuredTitles'>
                    <h1>Abuja</h1>
                    <h2>5465 properties</h2>
                </div>
            </div>

            <div className='featuredItem'>
                <img src='https://cf.bstatic.com/xdata/images/city/square250/661041.webp?k=9b623dbbbf3f001248b38d9e75f2a71f985b44436b2fd871d2e6153c3d76a9be&o=' atl='' className='featuredImg' />
                <div className='featuredTitles'>
                    <h1>Lekki</h1>
                    <h2>5454 properties</h2>
                </div>
            </div>

        </div>
    )
}