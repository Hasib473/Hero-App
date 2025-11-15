import downimg from '../../assets/icon-downloads.png'
import ratingimg from '../../assets/icon-ratings.png'
import { removeApp } from '../localStorage';


const Installed = ({ apps , onUninstall  }) => {

    const data = apps
      const handleUninstall = () => {
    removeApp(apps.id);     // localStorage থেকে remove
    onUninstall(apps.id);   // parent কে জানানো
  };
    return (
        <>
            <div className="w-11/12 mx-auto">
                <div className='flex justify-between items-center p-2 bg-amber-50 shadow my-4'>
                    <div className="mt-3 flex justify-baseline gap-4 items-center">
                        <img className="w-[100px] rounded-2xl" src={data.image} alt="nothing" />
                        <div className='p-2'>
                            <h1 className='text-xl font-bold'>{data.title}</h1>
                            <div className='flex justify-baseline gap-3'>
                                <p className='flex items-center gap-2 font-bold text-green-400'> <img className='w-5' src={downimg} alt="" /> {data.downloads}</p>
                                <p className='flex items-center gap-2 font-bold text-orange-400'><img className='w-5' src={ratingimg} alt="" /> {data.ratingAvg}</p>
                                 <p className='font-bold text-violet-400'>{data.size} MB</p>
                            </div>


                        </div>
                    </div>
                    <div>
                        <button onClick={handleUninstall} className='btn bg-green-400 text-white'>Uninstall</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Installed;