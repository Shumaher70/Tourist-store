import { useCallback, useState } from 'react';
import { Typography } from '@material-tailwind/react';

const DetailsSection = () => {
  const [open, setOpen] = useState(false);
  const [trigger, setTrigger] = useState(true);

  const clickHandler = useCallback(() => {
    setOpen((previous) => !previous);
  }, []);

  const clickOutsideHandler = useCallback(() => {
    setTrigger(true);
  }, []);

  const clickInsideHandler = useCallback(() => {
    setTrigger(false);
  }, []);

  const labelButton = useCallback(() => {
    return open ? 'WENIGER ANZEIGEN' : 'MEHR ANZEIGEN';
  }, [open]);

  return (
    <section className="wrapper bg-[#f2f2f2]">
      <Typography className="font-normal text-4xl">DETAILS</Typography>
      <div className="flex lg:flex-row flex-col">
        <div className="flex-1">
          <div
            className={`
            width-full 
            p-5
          bg-white
            border-[1px]
          border-black/10 py-5
            mt-5
            overflow-hidden
        `}
          >
            <div className="w-full flex sm:flex-row flex-col border-b-[1px] border-black/10 py-5">
              <div className="flex-1 flex items-center">
                <Typography className="font-bold">Features</Typography>
              </div>
              <div className="flex-1 flex items-center">
                <a
                  className="underline cursor-pointer"
                  href="https://cdn.shopify.com/s/files/1/0533/4738/5504/files/Heimplanet-Fistral-Manual.pdf?v=1679586931"
                >
                  Download: Fistral Guide
                </a>
              </div>
            </div>

            <div className="w-full flex sm:flex-row flex-col border-b-[1px] border-black/10 py-5">
              <div className="flex-1 flex items-center">
                <Typography className="font-bold">Pack size</Typography>
              </div>
              <div className="flex-1 flex items-center">
                <Typography>
                  20.0 x 38.0 x 20.0 cm / 7.87 x 14.96 x 7.87in
                </Typography>
              </div>
            </div>

            <div className="w-full flex sm:flex-row flex-col border-b-[1px] border-black/10 py-5">
              <div className="flex-1 flex items-center">
                <Typography className="font-bold">Weight</Typography>
              </div>
              <div className="flex-1 flex items-center">
                <Typography>2.9 kg / 6.44lbs</Typography>
              </div>
            </div>

            <div
              className={`w-full flex sm:flex-row flex-col border-b-[1px] border-black/10 py-5`}
            >
              <div className="flex-1 flex items-center">
                <Typography className="font-bold">Footprint</Typography>
              </div>
              <div className="flex-1 flex items-center">
                <Typography>
                  4.3 m² / 0.4sq. ft. (Inner tent: 2.9 m² / 0.4sq. ft.)
                </Typography>
              </div>
            </div>

            <div
              className={`w-full ${
                open ? 'flex' : 'hidden'
              } sm:flex-row flex-col border-b-[1px] border-black/10 py-5`}
            >
              <div className="flex-1 flex items-center">
                <Typography className="font-bold">Inner tent height</Typography>
              </div>
              <div className="flex-1 flex items-center">
                <Typography>112.0 cm / 44.09in</Typography>
              </div>
            </div>

            <div
              className={`w-full ${
                open ? 'flex' : 'hidden'
              } sm:flex-row flex-col border-b-[1px] border-black/10 py-5`}
            >
              <div className="flex-1 flex items-center">
                <Typography className="font-bold">Total height</Typography>
              </div>
              <div className="flex-1 flex items-center">
                <Typography>133.0 cm / 52.36in</Typography>
              </div>
            </div>

            <div
              className={`w-full ${
                open ? 'flex' : 'hidden'
              } sm:flex-row flex-col border-b-[1px] border-black/10 py-5`}
            >
              <div className="flex-1 flex items-center">
                <Typography className="font-bold">Tent floor</Typography>
              </div>
              <div className="flex-1 flex items-center">
                <Typography>
                  70D Nylon DWR PU (water column: 5000 mm)
                </Typography>
              </div>
            </div>

            <div
              className={`w-full ${
                open ? 'flex' : 'hidden'
              } sm:flex-row flex-col border-b-[1px] border-black/10 py-5`}
            >
              <div className="flex-1 flex items-center">
                <Typography className="font-bold">Inner tent</Typography>
              </div>
              <div className="flex-1 flex items-center">
                <Typography>40D Nylon Ripstop DWR (breathable)</Typography>
              </div>
            </div>

            <div
              className={`w-full ${
                open ? 'flex' : 'hidden'
              } sm:flex-row flex-col border-b-[1px] border-black/10 py-5`}
            >
              <div className="flex-1 flex items-center">
                <Typography className="font-bold">Flysheet</Typography>
              </div>
              <div className="flex-1 flex items-center">
                <Typography>
                  40D double ripstop HT polyester PU (water column: 3000 mm)
                </Typography>
              </div>
            </div>

            <div
              className={`w-full ${
                open ? 'flex' : 'hidden'
              } sm:flex-row flex-col border-b-[1px] border-black/10 py-5`}
            >
              <div className="flex-1 flex items-center">
                <Typography className="font-bold">Airframe</Typography>
              </div>
              <div className="flex-1 flex items-center">
                <Typography>140 HPE Dacron (HT Polyester), TPU</Typography>
              </div>
            </div>

            <div
              className="
              w-full
              bg-white
              flex
              justify-center
              items-center
              mt-5
              "
            >
              <div>
                <button
                  onClick={clickHandler}
                  className="
									border-[1px]
									border-black
									bg-transparent
									rounded-none
								text-black
								hover:bg-black
								hover:text-white
								hover:border-white
									py-4
									px-5
									text-sm
									transition
									"
                >
                  {labelButton()}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="
							flex-1 
							flex
							flex-col
							justify-center
						  items-center
							mt-5
							"
        >
          {trigger && (
            <img
              className="brightness-95"
              src={require('../../dammyDB/detailsImg/1.webp')}
              alt="outside"
            />
          )}

          {!trigger && (
            <img
              className=" brightness-95"
              src={require('../../dammyDB/detailsImg/2.webp')}
              alt="outside"
            />
          )}
          <div className="bg-white flex mt-5">
            <button
              onClick={clickOutsideHandler}
              className={`${
                trigger ? 'bg-black text-white' : 'bg-white text-black'
              } m-2 py-3 px-5`}
            >
              OUTSIDE
            </button>
            <button
              onClick={clickInsideHandler}
              className={`${
                trigger ? 'bg-white text-black' : 'bg-black text-white'
              } m-2 py-3 px-5`}
            >
              GROUND
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
