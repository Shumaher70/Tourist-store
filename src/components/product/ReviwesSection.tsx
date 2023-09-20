import { Button, Typography } from '@material-tailwind/react';
import { useState, useRef, useCallback } from 'react';
import { AiOutlineStar, AiFillStar, AiOutlineDownload } from 'react-icons/ai';

const ReviwesSection = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [maxLengthInput, setmaxLengthInput] = useState<null | number>(null);
  const [maxLengthArea, setmaxLengthArea] = useState<null | number>(null);
  const valueTile = useRef<HTMLInputElement>(null);
  const valueArea = useRef<HTMLTextAreaElement>(null);

  const onChangeInputHandler = useCallback(() => {
    const maxlengthInput = 100 - valueTile.current?.value.length!;
    setmaxLengthInput(maxlengthInput);
  }, []);

  const onChangeTextAreaHandler = useCallback(() => {
    const maxlengthArea = 5000 - valueArea.current?.value.length!;
    setmaxLengthArea(maxlengthArea);
  }, []);

  return (
    <section className="wrapper">
      <Typography className="text-4xl">REVIEWS</Typography>
      <div
        className="
        w-full
        flex
        flex-col
        items-center
        bg-[#f2f2f2]
        p-10
      "
      >
        <div
          className="
          flex
          items-center 
          flex-col
        "
        >
          <Typography
            className="
            text-2xl 
            font-normal
          "
          >
            CUSTOMERS REVIEWS
          </Typography>
          <div
            className="
            flex 
            flex-col 
            justify-center 
            items-center
          "
          >
            <div
              className="
              flex 
              mt-5
            "
            >
              <AiOutlineStar
                className="
                h-[20px] 
                w-[20px]
              "
              />
              <AiOutlineStar
                className="
                h-[20px] 
                w-[20px]
              "
              />
              <AiOutlineStar
                className="
                h-[20px] 
                w-[20px]
              "
              />
              <AiOutlineStar
                className="
                h-[20px] 
                w-[20px]
              "
              />
              <AiOutlineStar
                className="
                h-[20px] 
                w-[20px]
              "
              />
            </div>
            <Typography
              className="
              text-sm
            "
            >
              Be the first to write a review
            </Typography>
          </div>
          <Button
            color="gray"
            className="
            rounded-none 
            bg-black
            mt-5
            px-10
          "
          >
            Write a review
          </Button>
        </div>

        <form
          className="
          flex
          flex-col
          items-center
          border-t-[1px]
          border-black/20
          w-full
          mt-10
          pt-5
        "
        >
          <Typography
            className="
            text-2xl
            font-normal
          "
          >
            Write a review
          </Typography>

          <div
            className="
            flex
            flex-col
            items-center
            mt-5
            w-full
          "
          >
            <Typography
              className="
              text-sm
              font-normal
            "
            >
              Evalution
            </Typography>
            <div
              className="
              flex
              mt-2
            "
            >
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    {index <= (hover || rating) ? (
                      <AiFillStar className="w-[30px] h-[30px]" />
                    ) : (
                      <AiOutlineStar className="w-[30px] h-[30px]" />
                    )}
                  </button>
                );
              })}
            </div>

            <div
              className="
              w-full
              flex 
              flex-col
              items-center
            "
            >
              <label
                htmlFor="title"
                className="
                  mt-5
                  font-normal
                "
              >
                Rating title{' '}
                <span
                  className="
                  text-[14px]
                  font-normal
                "
                >{`${maxLengthInput ? `{${maxLengthInput}}` : ''}`}</span>
              </label>
              <input
                onChange={onChangeInputHandler}
                maxLength={100}
                ref={valueTile}
                placeholder="Give your a rating title"
                type="text"
                name="title"
                id="title"
                className="
                w-full
                text-white
                p-3
                bg-black
                mt-3
              "
              />
            </div>

            <div
              className="
              w-full
              flex 
              flex-col
              items-center
            "
            >
              <label
                htmlFor="texarea"
                className="
                  mt-5
                  font-normal
                "
              >
                Rating title{' '}
                <span
                  className="
                  text-[14px]
                  font-normal
                "
                >{`${maxLengthArea ? `{${maxLengthArea}}` : ''}`}</span>
              </label>
              <textarea
                ref={valueArea}
                onChange={onChangeTextAreaHandler}
                maxLength={100}
                placeholder="Give your a rating title"
                name="texarea"
                id="texarea"
                className="
                w-full
                text-white
                p-3
                bg-black
                mt-3
              "
              />
            </div>

            <div
              className="
              mt-5
              flex
              flex-col
              items-center
            "
            >
              <Typography
                className="
                font-normal
              "
              >
                Picture/video (optional)
              </Typography>
              <label
                htmlFor="file"
                className="
                  mt-5
                  cursor-pointer
                "
              >
                <AiOutlineDownload
                  className="
                  w-[128px]
                  h-[128px]
                  text-gray-700
                  border-[1px]
                  border-black/20
                "
                />
              </label>
              <input
                accept=".mp3,.mp4,.avi"
                type="file"
                name="file"
                id="file"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReviwesSection;
