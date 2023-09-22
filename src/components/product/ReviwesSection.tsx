import { Button, Typography } from '@material-tailwind/react';
import { nanoid } from '@reduxjs/toolkit';
import { useState, useRef, useCallback, useEffect } from 'react';
import AnimateHeight from 'react-animate-height';
import {
  AiOutlineStar,
  AiFillStar,
  AiOutlineDownload,
  AiOutlineClose,
} from 'react-icons/ai';

const ReviwesSection = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [maxLengthInput, setmaxLengthInput] = useState<null | number>(null);
  const [maxLengthArea, setmaxLengthArea] = useState<null | number>(null);
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string[]>([]);
  const [show, setShow] = useState(false);

  const valueTile = useRef<HTMLInputElement>(null);
  const valueArea = useRef<HTMLTextAreaElement>(null);
  const valueFile = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview((prev) => [...prev!, String(reader.result)].slice(0, 4));
      };
      reader.readAsDataURL(image);
    }
  }, [image]);

  const onChangeInputHandler = useCallback(() => {
    const maxlengthInput = 100 - valueTile.current?.value.length!;
    setmaxLengthInput(maxlengthInput);
  }, []);

  const onChangeTextAreaHandler = useCallback(() => {
    const maxlengthArea = 5000 - valueArea.current?.value.length!;
    setmaxLengthArea(maxlengthArea);
  }, []);

  const inputChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file && file.type.substring(0, 5) === 'image') {
        setImage(file);
      } else {
        setImage(null || undefined);
      }
    },
    []
  );

  const closeHandler = useCallback(
    (event: React.MouseEvent<SVGElement>) => {
      const removeImg = preview?.filter(
        (img, index) =>
          index !==
          Number(event.currentTarget.parentElement?.getAttribute('data-index'))
      );
      setPreview(removeImg);
    },
    [preview]
  );

  const clickShowHandler = useCallback(() => {
    setShow((priv) => !priv);
  }, []);

  const clickCloseHandler = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <section className="wrapper">
      <Typography className="text-4xl">REVIEWS</Typography>
      <div
        className="
        mt-5
        w-full
        flex
        flex-col
        items-center
        bg-[#f2f2f2]
        2xl:px-[20%]
        xl:px-[15%]
        px-[10%]
        py-[5%]
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
          items-center 
          flex-col
          lg:flex-row
          w-full  
          lg:mt-10
        "
        >
          <div
            className="
            w-full 
            text-center
            lg:border-r-[1px]
            border-black/20
          "
          >
            <div
              className="
                flex 
                flex-col 
                justify-center 
                items-center
              "
            >
              <div className="flex flex-col lg:items-start items-center">
                <div
                  className="
                   flex 
                   lg:mt-0
                   mt-5
                  "
                >
                  {[...Array(5)].map((img) => (
                    <AiOutlineStar
                      key={nanoid()}
                      className="
                        h-[20px] 
                        w-[20px]
                      "
                    />
                  ))}
                </div>
                <Typography
                  className="
                       text-sm
                      "
                >
                  Be the first to write a review
                </Typography>
              </div>
            </div>
          </div>

          <div className="w-full text-center">
            <Button
              aria-controls="example-panel"
              onClick={clickShowHandler}
              color="gray"
              className="
                rounded-none 
                bg-black
                lg:mt-0
                mt-5
                w-[150px]
              "
            >
              {show ? 'Cansetl rating' : 'Write a review'}
            </Button>
          </div>
        </div>

        <AnimateHeight
          className="w-full"
          id="example-panel"
          duration={500}
          height={show ? 'auto' : 0}
        >
          <form
            className={`
            flex
            flex-col
            items-center
            border-t-[1px]
            border-black/20
            w-full
            mt-10
            pt-5
            overflow-hidden
            transition:h
            duration-[2250ms]
            ease-in
          `}
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
                <div
                  className="
                flex
                flex-wrap
                justify-center
                items-center
                gap-2
                mt-5
              "
                >
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      valueFile.current?.click();
                    }}
                    className="
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
                  hover:opacity-90
                "
                    />
                  </button>
                  {preview &&
                    preview.map((img, index) => (
                      <div
                        data-index={index}
                        key={nanoid()}
                        className="
                      relative
                    "
                      >
                        <img
                          src={img}
                          alt="1"
                          className="
                        w-[128px]
                        h-[128px]
                        object-cover
                      "
                        />
                        <AiOutlineClose
                          onClick={closeHandler}
                          className="
                          absolute
                          top-2
                          right-2
                          bg-white
                          rounded-full
                          cursor-pointer
                        "
                        />
                      </div>
                    ))}
                </div>
                <input
                  ref={valueFile}
                  accept="image/*"
                  type="file"
                  name="file"
                  id="file"
                  onChange={inputChangeHandler}
                />
              </div>

              <Typography
                className="
                font-normal
                mt-5
                sm:block
                hidden
               "
              >
                Name (publicly displayed as
                <select
                  className="
                h-auto
                bg-transparent
                ml-1
                outline-none
              "
                >
                  <option>Anonymous</option>
                  <option>John Smith</option>
                  <option>John S.</option>
                  <option>J.S</option>
                </select>
                )
              </Typography>

              <input
                placeholder="Enter your name (public)"
                type="text"
                name="title"
                id="name_public"
                required
                className="
                w-full
                text-white
                p-3
                bg-black
                mt-3
              "
              />

              <label
                htmlFor="email"
                className="
                  mt-5
                  font-normal
                "
              >
                E-mail
              </label>
              <input
                placeholder="Enter your email"
                type="email"
                name="email"
                required
                id="email"
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
              sm:flex 
              sm:flex-row
              flex
              flex-col
              gap-5
              mt-5
              
            "
            >
              <button
                onClick={clickCloseHandler}
                type="button"
                className="
                bg-white
                border-2
                border-black
                text-black
                font-normal
                py-2
                px-5
              "
              >
                Cancel rating
              </button>
              <button
                className="
                bg-black
                text-white
                font-normal
                py-2
                px-5
              "
              >
                Send rating
              </button>
            </div>
          </form>
        </AnimateHeight>
      </div>
    </section>
  );
};

export default ReviwesSection;
