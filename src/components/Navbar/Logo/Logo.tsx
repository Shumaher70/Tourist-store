import { useDispatch } from 'react-redux';
import { hideInfo } from '../../../store/redusers/sideBarReduser';

const Logo = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(hideInfo());
  };
  return (
    <div onClick={clickHandler} className="cursor-pointer min-w-[150px]">
      <svg
        className="w-full"
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        viewBox="0 0 478 67"
      >
        <g strokeWidth="2.00" fill="none" strokeLinecap="butt">
          <path
            stroke="#828282"
            vectorEffect="non-scaling-stroke"
            d="
  M 276.00 5.43
  A 0.43 0.43 0.0 0 0 275.57 5.00
  L 3.43 5.00
  A 0.43 0.43 0.0 0 0 3.00 5.43
  L 3.00 58.57
  A 0.43 0.43 0.0 0 0 3.43 59.00
  L 275.57 59.00
  A 0.43 0.43 0.0 0 0 276.00 58.57
  L 276.00 5.43"
          />
          <path
            stroke="#a2a2a2"
            vectorEffect="non-scaling-stroke"
            d="
  M 379.8316 47.5047
  A 16.99 16.54 65.7 0 0 387.9146 25.2136
  A 16.99 16.54 65.7 0 0 365.8484 16.5353
  A 16.99 16.54 65.7 0 0 357.7654 38.8264
  A 16.99 16.54 65.7 0 0 379.8316 47.5047"
          />
          <path
            stroke="#a2a2a2"
            vectorEffect="non-scaling-stroke"
            d="
  M 448.83 28.13
  Q 448.08 23.70 448.92 19.28
  Q 449.02 18.75 449.56 18.75
  L 459.13 18.76
  Q 459.59 18.76 459.80 19.17
  Q 461.08 21.68 462.94 23.74
  Q 463.94 24.85 463.93 23.36
  Q 463.89 19.88 462.49 16.73
  Q 462.26 16.23 461.71 16.23
  L 440.79 16.29
  A 0.82 0.81 61.5 0 0 440.35 17.79
  Q 441.81 18.74 443.53 18.59
  A 0.90 0.90 0.0 0 1 444.50 19.49
  L 444.50 44.07
  Q 444.50 44.62 444.00 44.84
  L 440.77 46.26
  Q 440.31 46.46 440.24 46.97
  C 440.10 47.94 440.73 48.27 441.65 48.20
  Q 452.09 47.47 462.61 47.82
  Q 463.31 47.84 463.46 47.16
  L 464.98 40.11
  A 0.65 0.65 0.0 0 0 463.82 39.58
  Q 462.36 41.53 461.09 43.63
  C 459.62 46.07 451.84 45.42 449.43 45.02
  A 1.12 1.12 0.0 0 1 448.50 43.92
  L 448.50 32.53
  A 1.53 1.53 0.0 0 1 450.03 31.00
  L 457.36 31.00
  Q 457.96 31.00 458.04 31.60
  L 458.38 34.52
  Q 458.46 35.17 459.11 35.11
  L 459.82 35.05
  A 0.75 0.75 0.0 0 0 460.50 34.30
  L 460.50 25.38
  Q 460.50 24.75 459.88 24.75
  L 459.09 24.75
  Q 458.42 24.75 458.32 25.41
  L 457.97 27.75
  Q 457.88 28.36 457.25 28.38
  L 449.34 28.55
  Q 448.90 28.56 448.83 28.13"
          />
          <path
            stroke="#a2a2a2"
            vectorEffect="non-scaling-stroke"
            d="
  M 329.00 20.15
  L 329.00 44.69
  Q 329.00 45.44 328.27 45.57
  L 324.87 46.18
  Q 324.31 46.28 324.31 46.84
  L 324.31 47.42
  Q 324.31 47.91 324.80 47.91
  L 337.48 47.93
  Q 337.94 47.93 337.98 47.46
  L 338.02 46.87
  Q 338.07 46.18 337.39 46.09
  L 333.84 45.61
  Q 333.38 45.55 333.30 45.09
  C 332.09 37.71 332.99 28.18 333.00 20.58
  A 1.07 1.07 0.0 0 1 334.07 19.51
  L 341.35 19.50
  Q 341.90 19.50 342.20 19.96
  L 344.83 24.01
  A 0.68 0.68 0.0 0 0 346.07 23.52
  L 344.88 17.12
  Q 344.76 16.50 344.14 16.50
  L 317.85 16.50
  Q 317.18 16.50 317.03 17.15
  L 315.55 23.64
  A 0.92 0.92 0.0 0 0 317.26 24.28
  L 319.57 19.95
  Q 319.81 19.50 320.33 19.50
  L 328.34 19.50
  Q 329.00 19.50 329.00 20.15"
          />
          <path
            stroke="#a2a2a2"
            vectorEffect="non-scaling-stroke"
            d="
  M 417.73 31.89
  C 423.09 28.53 424.69 20.65 418.02 17.86
  C 412.61 15.61 406.35 17.07 400.61 17.01
  Q 400.04 17.00 400.00 17.57
  C 399.89 18.83 403.02 19.13 403.94 19.40
  Q 404.48 19.56 404.49 20.12
  Q 404.55 31.80 404.42 43.51
  Q 404.39 46.63 401.17 45.88
  Q 400.22 45.66 400.47 46.60
  L 400.68 47.43
  Q 400.81 47.93 401.33 47.91
  Q 404.02 47.85 412.74 48.07
  Q 413.73 48.10 413.57 46.85
  Q 413.49 46.29 412.94 46.19
  L 408.95 45.45
  Q 408.32 45.33 408.32 44.70
  L 408.26 33.50
  Q 408.26 32.75 409.00 32.75
  L 412.46 32.75
  Q 412.98 32.75 413.29 33.16
  Q 417.35 38.55 421.15 44.13
  C 423.36 47.37 427.72 50.91 430.19 45.69
  C 430.37 45.31 430.28 45.12 429.94 44.94
  Q 429.40 44.66 429.01 45.12
  Q 427.76 46.57 425.76 44.11
  Q 425.46 43.73 425.18 43.35
  L 417.57 32.66
  Q 417.25 32.19 417.73 31.89"
          />
          <path
            stroke="#a2a2a2"
            vectorEffect="non-scaling-stroke"
            d="
  M 301.20 37.48
  C 304.85 47.21 287.62 50.03 288.15 37.42
  Q 288.17 36.81 287.56 36.78
  L 286.85 36.74
  Q 286.24 36.71 286.15 37.32
  L 285.08 44.77
  Q 285.01 45.23 285.47 45.32
  C 288.62 45.92 290.77 48.07 293.49 48.42
  C 302.18 49.55 308.46 40.30 302.90 33.11
  C 299.98 29.32 295.22 29.77 291.43 27.59
  C 287.12 25.10 288.03 18.57 293.45 19.08
  C 297.13 19.43 298.50 22.43 300.30 25.17
  Q 300.52 25.50 300.91 25.50
  L 301.18 25.50
  Q 301.63 25.50 301.63 25.05
  L 301.65 17.16
  A 0.33 0.33 0.0 0 0 301.14 16.88
  L 299.41 18.03
  Q 298.90 18.37 298.36 18.07
  C 288.28 12.40 279.89 25.87 289.97 31.28
  C 293.56 33.20 299.49 32.93 301.20 37.48"
          />
          <path
            stroke="#828282"
            vectorEffect="non-scaling-stroke"
            d="
  M 274.00 7.27
  A 0.27 0.27 0.0 0 0 273.73 7.00
  L 5.27 7.00
  A 0.27 0.27 0.0 0 0 5.00 7.27
  L 5.00 56.73
  A 0.27 0.27 0.0 0 0 5.27 57.00
  L 273.73 57.00
  A 0.27 0.27 0.0 0 0 274.00 56.73
  L 274.00 7.27"
          />
          <path
            stroke="#828282"
            vectorEffect="non-scaling-stroke"
            d="
  M 77.8929 47.2127
  A 16.98 16.56 63.4 0 0 85.0972 24.6151
  A 16.98 16.56 63.4 0 0 62.6871 16.8473
  A 16.98 16.56 63.4 0 0 55.4828 39.4449
  A 16.98 16.56 63.4 0 0 77.8929 47.2127"
          />
          <path
            stroke="#828282"
            vectorEffect="non-scaling-stroke"
            d="
  M 30.49 44.86
  L 30.71 20.27
  Q 30.72 19.50 31.48 19.50
  L 38.85 19.50
  Q 39.40 19.50 39.69 19.98
  L 41.82 23.56
  Q 42.08 24.00 42.59 24.00
  L 42.97 24.00
  Q 43.73 24.00 43.58 23.26
  L 42.34 16.89
  Q 42.23 16.33 41.66 16.33
  L 15.35 16.56
  Q 14.68 16.57 14.52 17.21
  L 12.89 23.70
  A 0.71 0.71 0.0 0 0 13.69 24.58
  C 15.50 24.30 16.18 21.33 17.16 19.93
  Q 17.46 19.50 17.99 19.50
  L 25.44 19.51
  A 1.06 1.06 0.0 0 1 26.50 20.57
  L 26.50 44.64
  Q 26.50 45.26 25.89 45.39
  L 22.26 46.14
  Q 21.75 46.24 21.75 46.76
  L 21.75 47.43
  Q 21.75 48.06 22.38 48.04
  Q 28.13 47.90 33.86 48.09
  C 34.77 48.12 35.53 47.81 35.47 46.81
  Q 35.44 46.16 34.80 46.09
  L 31.18 45.64
  Q 30.49 45.55 30.49 44.86"
          />
          <path
            stroke="#828282"
            vectorEffect="non-scaling-stroke"
            d="
  M 122.45 43.49
  C 118.13 48.02 105.86 46.09 105.01 38.99
  Q 104.22 32.34 104.53 20.98
  Q 104.61 18.11 108.06 18.70
  Q 108.70 18.81 108.72 18.16
  L 108.76 17.01
  Q 108.78 16.50 108.26 16.50
  L 98.25 16.50
  A 0.77 0.76 -87.5 0 0 97.49 17.20
  C 97.30 19.54 100.64 17.49 100.67 20.74
  C 100.72 26.40 99.57 38.07 102.09 42.62
  C 106.10 49.88 120.09 50.42 125.12 44.26
  C 129.72 38.62 124.01 21.28 129.24 18.44
  C 129.85 18.10 130.27 17.70 130.01 17.01
  Q 129.81 16.50 129.26 16.50
  L 121.75 16.50
  Q 121.17 16.50 120.97 17.04
  L 120.75 17.63
  Q 120.49 18.30 121.20 18.40
  L 123.86 18.80
  Q 124.40 18.88 124.44 19.43
  C 124.85 24.44 125.97 39.81 122.45 43.49"
          />
          <path
            stroke="#828282"
            vectorEffect="non-scaling-stroke"
            d="
  M 162.70 45.54
  C 164.82 48.47 169.87 50.06 170.65 45.25
  Q 170.73 44.77 170.30 44.98
  Q 167.56 46.32 165.75 43.51
  Q 162.15 37.93 157.97 32.70
  A 0.47 0.46 55.7 0 1 158.10 32.00
  C 165.49 27.82 164.19 18.50 155.73 16.90
  C 151.16 16.03 146.00 17.07 141.29 17.01
  A 0.55 0.55 0.0 0 0 140.75 17.46
  Q 140.57 18.43 141.62 18.74
  Q 142.14 18.90 142.68 18.92
  C 144.60 18.97 145.03 19.76 145.02 21.64
  Q 144.98 32.21 145.00 42.80
  C 145.01 45.08 144.34 46.54 141.73 45.86
  Q 141.02 45.68 141.02 46.41
  L 141.02 47.51
  Q 141.02 48.11 141.62 48.09
  Q 147.31 47.89 153.01 48.01
  C 153.84 48.03 154.53 47.51 154.08 46.63
  Q 153.83 46.12 153.27 46.04
  L 149.57 45.48
  Q 149.00 45.39 149.00 44.81
  L 149.00 33.54
  Q 149.00 33.08 149.44 32.93
  Q 152.83 31.84 154.83 34.61
  Q 158.77 40.11 162.70 45.54"
          />
          <path
            stroke="#828282"
            vectorEffect="non-scaling-stroke"
            d="
  M 248.25 45.29
  L 244.71 46.24
  Q 244.25 46.36 244.25 46.84
  L 244.25 47.41
  Q 244.25 48.06 244.90 48.05
  L 257.04 47.97
  Q 257.53 47.97 257.82 47.58
  Q 258.38 46.81 257.16 46.08
  Q 256.77 45.84 256.32 45.82
  L 253.65 45.67
  Q 253.00 45.63 253.00 44.98
  L 253.00 20.25
  Q 253.00 19.50 253.75 19.50
  L 261.26 19.50
  Q 261.77 19.50 262.04 19.94
  C 262.48 20.68 264.38 25.21 265.58 23.88
  Q 265.96 23.46 265.85 22.91
  L 264.73 17.01
  Q 264.63 16.50 264.11 16.50
  L 237.57 16.50
  Q 236.83 16.50 236.69 17.23
  L 235.45 23.70
  A 0.85 0.85 0.0 0 0 237.02 24.29
  L 239.57 19.94
  Q 239.83 19.50 240.34 19.50
  L 248.10 19.51
  Q 248.75 19.51 248.75 20.16
  L 248.75 44.64
  Q 248.75 45.15 248.25 45.29"
          />
          <path
            stroke="#828282"
            vectorEffect="non-scaling-stroke"
            d="
  M 218.46 18.12
  C 208.36 13.22 200.36 24.49 208.48 30.47
  C 212.81 33.66 222.94 33.06 221.42 40.84
  C 219.79 49.18 207.66 46.49 207.90 38.27
  Q 207.93 37.41 207.37 36.75
  A 0.74 0.74 0.0 0 0 206.08 37.13
  L 205.00 44.93
  Q 204.92 45.54 205.54 45.53
  L 206.90 45.49
  Q 207.34 45.48 207.68 45.74
  C 218.11 53.70 230.61 41.60 222.32 32.61
  C 219.08 29.09 213.95 29.78 210.49 27.09
  C 204.05 22.07 213.47 14.35 218.42 22.82
  Q 219.36 24.43 220.47 25.46
  A 0.61 0.61 0.0 0 0 221.50 25.01
  L 221.50 17.24
  Q 221.50 15.93 220.56 16.83
  L 219.35 17.98
  Q 218.96 18.36 218.46 18.12"
          />
          <path
            stroke="#828282"
            vectorEffect="non-scaling-stroke"
            d="
  M 190.19 19.35
  L 192.84 18.71
  Q 193.38 18.58 193.23 18.04
  C 192.74 16.35 184.19 17.00 182.44 17.01
  Q 181.75 17.01 181.75 17.71
  L 181.75 18.32
  Q 181.75 18.90 182.33 18.94
  L 184.83 19.11
  Q 185.50 19.16 185.50 19.82
  L 185.50 45.04
  Q 185.50 45.60 184.94 45.70
  C 183.72 45.90 180.20 45.05 181.08 47.64
  Q 181.23 48.07 181.68 48.04
  Q 187.05 47.72 192.40 47.97
  C 193.22 48.01 193.87 47.52 193.85 46.68
  Q 193.84 46.13 193.30 46.07
  L 190.32 45.73
  Q 189.50 45.64 189.50 44.82
  L 189.50 20.23
  Q 189.50 19.52 190.19 19.35"
          />
          <path
            stroke="#a2a2a2"
            vectorEffect="non-scaling-stroke"
            d="
  M 383.99 38.36
  C 387.26 28.88 380.69 14.26 368.79 18.06
  C 359.70 20.96 359.05 30.62 362.13 38.29
  C 366.24 48.53 380.29 49.08 383.99 38.36"
          />
          <path
            stroke="#828282"
            vectorEffect="non-scaling-stroke"
            d="
  M 72.8881 46.0988
  A 14.48 12.23 79.1 0 0 82.1594 29.5674
  A 14.48 12.23 79.1 0 0 67.4119 17.6612
  A 14.48 12.23 79.1 0 0 58.1406 34.1926
  A 14.48 12.23 79.1 0 0 72.8881 46.0988"
          />
          <path
            stroke="#828282"
            vectorEffect="non-scaling-stroke"
            d="
  M 149.25 31.03
  C 164.41 33.37 160.79 15.25 149.20 18.68
  Q 148.75 18.82 148.75 19.29
  L 148.75 30.44
  Q 148.75 30.95 149.25 31.03"
          />
          <path
            stroke="#a2a2a2"
            vectorEffect="non-scaling-stroke"
            d="
  M 408.75 30.87
  C 412.22 31.82 419.04 30.47 418.99 25.76
  C 418.94 20.56 413.69 17.02 408.81 18.70
  Q 408.25 18.90 408.25 19.50
  L 408.25 30.22
  Q 408.25 30.73 408.75 30.87"
          />
        </g>
        <path
          fill="transparent"
          d="
  M 0.00 0.00
  L 478.00 0.00
  L 478.00 67.00
  L 0.00 67.00
  L 0.00 0.00
  Z
  M 276.00 5.43
  A 0.43 0.43 0.0 0 0 275.57 5.00
  L 3.43 5.00
  A 0.43 0.43 0.0 0 0 3.00 5.43
  L 3.00 58.57
  A 0.43 0.43 0.0 0 0 3.43 59.00
  L 275.57 59.00
  A 0.43 0.43 0.0 0 0 276.00 58.57
  L 276.00 5.43
  Z
  M 379.8316 47.5047
  A 16.99 16.54 65.7 0 0 387.9146 25.2136
  A 16.99 16.54 65.7 0 0 365.8484 16.5353
  A 16.99 16.54 65.7 0 0 357.7654 38.8264
  A 16.99 16.54 65.7 0 0 379.8316 47.5047
  Z
  M 448.83 28.13
  Q 448.08 23.70 448.92 19.28
  Q 449.02 18.75 449.56 18.75
  L 459.13 18.76
  Q 459.59 18.76 459.80 19.17
  Q 461.08 21.68 462.94 23.74
  Q 463.94 24.85 463.93 23.36
  Q 463.89 19.88 462.49 16.73
  Q 462.26 16.23 461.71 16.23
  L 440.79 16.29
  A 0.82 0.81 61.5 0 0 440.35 17.79
  Q 441.81 18.74 443.53 18.59
  A 0.90 0.90 0.0 0 1 444.50 19.49
  L 444.50 44.07
  Q 444.50 44.62 444.00 44.84
  L 440.77 46.26
  Q 440.31 46.46 440.24 46.97
  C 440.10 47.94 440.73 48.27 441.65 48.20
  Q 452.09 47.47 462.61 47.82
  Q 463.31 47.84 463.46 47.16
  L 464.98 40.11
  A 0.65 0.65 0.0 0 0 463.82 39.58
  Q 462.36 41.53 461.09 43.63
  C 459.62 46.07 451.84 45.42 449.43 45.02
  A 1.12 1.12 0.0 0 1 448.50 43.92
  L 448.50 32.53
  A 1.53 1.53 0.0 0 1 450.03 31.00
  L 457.36 31.00
  Q 457.96 31.00 458.04 31.60
  L 458.38 34.52
  Q 458.46 35.17 459.11 35.11
  L 459.82 35.05
  A 0.75 0.75 0.0 0 0 460.50 34.30
  L 460.50 25.38
  Q 460.50 24.75 459.88 24.75
  L 459.09 24.75
  Q 458.42 24.75 458.32 25.41
  L 457.97 27.75
  Q 457.88 28.36 457.25 28.38
  L 449.34 28.55
  Q 448.90 28.56 448.83 28.13
  Z
  M 329.00 20.15
  L 329.00 44.69
  Q 329.00 45.44 328.27 45.57
  L 324.87 46.18
  Q 324.31 46.28 324.31 46.84
  L 324.31 47.42
  Q 324.31 47.91 324.80 47.91
  L 337.48 47.93
  Q 337.94 47.93 337.98 47.46
  L 338.02 46.87
  Q 338.07 46.18 337.39 46.09
  L 333.84 45.61
  Q 333.38 45.55 333.30 45.09
  C 332.09 37.71 332.99 28.18 333.00 20.58
  A 1.07 1.07 0.0 0 1 334.07 19.51
  L 341.35 19.50
  Q 341.90 19.50 342.20 19.96
  L 344.83 24.01
  A 0.68 0.68 0.0 0 0 346.07 23.52
  L 344.88 17.12
  Q 344.76 16.50 344.14 16.50
  L 317.85 16.50
  Q 317.18 16.50 317.03 17.15
  L 315.55 23.64
  A 0.92 0.92 0.0 0 0 317.26 24.28
  L 319.57 19.95
  Q 319.81 19.50 320.33 19.50
  L 328.34 19.50
  Q 329.00 19.50 329.00 20.15
  Z
  M 417.73 31.89
  C 423.09 28.53 424.69 20.65 418.02 17.86
  C 412.61 15.61 406.35 17.07 400.61 17.01
  Q 400.04 17.00 400.00 17.57
  C 399.89 18.83 403.02 19.13 403.94 19.40
  Q 404.48 19.56 404.49 20.12
  Q 404.55 31.80 404.42 43.51
  Q 404.39 46.63 401.17 45.88
  Q 400.22 45.66 400.47 46.60
  L 400.68 47.43
  Q 400.81 47.93 401.33 47.91
  Q 404.02 47.85 412.74 48.07
  Q 413.73 48.10 413.57 46.85
  Q 413.49 46.29 412.94 46.19
  L 408.95 45.45
  Q 408.32 45.33 408.32 44.70
  L 408.26 33.50
  Q 408.26 32.75 409.00 32.75
  L 412.46 32.75
  Q 412.98 32.75 413.29 33.16
  Q 417.35 38.55 421.15 44.13
  C 423.36 47.37 427.72 50.91 430.19 45.69
  C 430.37 45.31 430.28 45.12 429.94 44.94
  Q 429.40 44.66 429.01 45.12
  Q 427.76 46.57 425.76 44.11
  Q 425.46 43.73 425.18 43.35
  L 417.57 32.66
  Q 417.25 32.19 417.73 31.89
  Z
  M 301.20 37.48
  C 304.85 47.21 287.62 50.03 288.15 37.42
  Q 288.17 36.81 287.56 36.78
  L 286.85 36.74
  Q 286.24 36.71 286.15 37.32
  L 285.08 44.77
  Q 285.01 45.23 285.47 45.32
  C 288.62 45.92 290.77 48.07 293.49 48.42
  C 302.18 49.55 308.46 40.30 302.90 33.11
  C 299.98 29.32 295.22 29.77 291.43 27.59
  C 287.12 25.10 288.03 18.57 293.45 19.08
  C 297.13 19.43 298.50 22.43 300.30 25.17
  Q 300.52 25.50 300.91 25.50
  L 301.18 25.50
  Q 301.63 25.50 301.63 25.05
  L 301.65 17.16
  A 0.33 0.33 0.0 0 0 301.14 16.88
  L 299.41 18.03
  Q 298.90 18.37 298.36 18.07
  C 288.28 12.40 279.89 25.87 289.97 31.28
  C 293.56 33.20 299.49 32.93 301.20 37.48
  Z"
        />
        <path
          fill="#050505"
          d="
  M 276.00 58.57
  A 0.43 0.43 0.0 0 1 275.57 59.00
  L 3.43 59.00
  A 0.43 0.43 0.0 0 1 3.00 58.57
  L 3.00 5.43
  A 0.43 0.43 0.0 0 1 3.43 5.00
  L 275.57 5.00
  A 0.43 0.43 0.0 0 1 276.00 5.43
  L 276.00 58.57
  Z
  M 274.00 7.27
  A 0.27 0.27 0.0 0 0 273.73 7.00
  L 5.27 7.00
  A 0.27 0.27 0.0 0 0 5.00 7.27
  L 5.00 56.73
  A 0.27 0.27 0.0 0 0 5.27 57.00
  L 273.73 57.00
  A 0.27 0.27 0.0 0 0 274.00 56.73
  L 274.00 7.27
  Z"
        />
        <path
          fill="#ffffff"
          d="
  M 274.00 56.73
  A 0.27 0.27 0.0 0 1 273.73 57.00
  L 5.27 57.00
  A 0.27 0.27 0.0 0 1 5.00 56.73
  L 5.00 7.27
  A 0.27 0.27 0.0 0 1 5.27 7.00
  L 273.73 7.00
  A 0.27 0.27 0.0 0 1 274.00 7.27
  L 274.00 56.73
  Z
  M 77.8929 47.2127
  A 16.98 16.56 63.4 0 0 85.0972 24.6151
  A 16.98 16.56 63.4 0 0 62.6871 16.8473
  A 16.98 16.56 63.4 0 0 55.4828 39.4449
  A 16.98 16.56 63.4 0 0 77.8929 47.2127
  Z
  M 30.49 44.86
  L 30.71 20.27
  Q 30.72 19.50 31.48 19.50
  L 38.85 19.50
  Q 39.40 19.50 39.69 19.98
  L 41.82 23.56
  Q 42.08 24.00 42.59 24.00
  L 42.97 24.00
  Q 43.73 24.00 43.58 23.26
  L 42.34 16.89
  Q 42.23 16.33 41.66 16.33
  L 15.35 16.56
  Q 14.68 16.57 14.52 17.21
  L 12.89 23.70
  A 0.71 0.71 0.0 0 0 13.69 24.58
  C 15.50 24.30 16.18 21.33 17.16 19.93
  Q 17.46 19.50 17.99 19.50
  L 25.44 19.51
  A 1.06 1.06 0.0 0 1 26.50 20.57
  L 26.50 44.64
  Q 26.50 45.26 25.89 45.39
  L 22.26 46.14
  Q 21.75 46.24 21.75 46.76
  L 21.75 47.43
  Q 21.75 48.06 22.38 48.04
  Q 28.13 47.90 33.86 48.09
  C 34.77 48.12 35.53 47.81 35.47 46.81
  Q 35.44 46.16 34.80 46.09
  L 31.18 45.64
  Q 30.49 45.55 30.49 44.86
  Z
  M 122.45 43.49
  C 118.13 48.02 105.86 46.09 105.01 38.99
  Q 104.22 32.34 104.53 20.98
  Q 104.61 18.11 108.06 18.70
  Q 108.70 18.81 108.72 18.16
  L 108.76 17.01
  Q 108.78 16.50 108.26 16.50
  L 98.25 16.50
  A 0.77 0.76 -87.5 0 0 97.49 17.20
  C 97.30 19.54 100.64 17.49 100.67 20.74
  C 100.72 26.40 99.57 38.07 102.09 42.62
  C 106.10 49.88 120.09 50.42 125.12 44.26
  C 129.72 38.62 124.01 21.28 129.24 18.44
  C 129.85 18.10 130.27 17.70 130.01 17.01
  Q 129.81 16.50 129.26 16.50
  L 121.75 16.50
  Q 121.17 16.50 120.97 17.04
  L 120.75 17.63
  Q 120.49 18.30 121.20 18.40
  L 123.86 18.80
  Q 124.40 18.88 124.44 19.43
  C 124.85 24.44 125.97 39.81 122.45 43.49
  Z
  M 162.70 45.54
  C 164.82 48.47 169.87 50.06 170.65 45.25
  Q 170.73 44.77 170.30 44.98
  Q 167.56 46.32 165.75 43.51
  Q 162.15 37.93 157.97 32.70
  A 0.47 0.46 55.7 0 1 158.10 32.00
  C 165.49 27.82 164.19 18.50 155.73 16.90
  C 151.16 16.03 146.00 17.07 141.29 17.01
  A 0.55 0.55 0.0 0 0 140.75 17.46
  Q 140.57 18.43 141.62 18.74
  Q 142.14 18.90 142.68 18.92
  C 144.60 18.97 145.03 19.76 145.02 21.64
  Q 144.98 32.21 145.00 42.80
  C 145.01 45.08 144.34 46.54 141.73 45.86
  Q 141.02 45.68 141.02 46.41
  L 141.02 47.51
  Q 141.02 48.11 141.62 48.09
  Q 147.31 47.89 153.01 48.01
  C 153.84 48.03 154.53 47.51 154.08 46.63
  Q 153.83 46.12 153.27 46.04
  L 149.57 45.48
  Q 149.00 45.39 149.00 44.81
  L 149.00 33.54
  Q 149.00 33.08 149.44 32.93
  Q 152.83 31.84 154.83 34.61
  Q 158.77 40.11 162.70 45.54
  Z
  M 248.25 45.29
  L 244.71 46.24
  Q 244.25 46.36 244.25 46.84
  L 244.25 47.41
  Q 244.25 48.06 244.90 48.05
  L 257.04 47.97
  Q 257.53 47.97 257.82 47.58
  Q 258.38 46.81 257.16 46.08
  Q 256.77 45.84 256.32 45.82
  L 253.65 45.67
  Q 253.00 45.63 253.00 44.98
  L 253.00 20.25
  Q 253.00 19.50 253.75 19.50
  L 261.26 19.50
  Q 261.77 19.50 262.04 19.94
  C 262.48 20.68 264.38 25.21 265.58 23.88
  Q 265.96 23.46 265.85 22.91
  L 264.73 17.01
  Q 264.63 16.50 264.11 16.50
  L 237.57 16.50
  Q 236.83 16.50 236.69 17.23
  L 235.45 23.70
  A 0.85 0.85 0.0 0 0 237.02 24.29
  L 239.57 19.94
  Q 239.83 19.50 240.34 19.50
  L 248.10 19.51
  Q 248.75 19.51 248.75 20.16
  L 248.75 44.64
  Q 248.75 45.15 248.25 45.29
  Z
  M 218.46 18.12
  C 208.36 13.22 200.36 24.49 208.48 30.47
  C 212.81 33.66 222.94 33.06 221.42 40.84
  C 219.79 49.18 207.66 46.49 207.90 38.27
  Q 207.93 37.41 207.37 36.75
  A 0.74 0.74 0.0 0 0 206.08 37.13
  L 205.00 44.93
  Q 204.92 45.54 205.54 45.53
  L 206.90 45.49
  Q 207.34 45.48 207.68 45.74
  C 218.11 53.70 230.61 41.60 222.32 32.61
  C 219.08 29.09 213.95 29.78 210.49 27.09
  C 204.05 22.07 213.47 14.35 218.42 22.82
  Q 219.36 24.43 220.47 25.46
  A 0.61 0.61 0.0 0 0 221.50 25.01
  L 221.50 17.24
  Q 221.50 15.93 220.56 16.83
  L 219.35 17.98
  Q 218.96 18.36 218.46 18.12
  Z
  M 190.19 19.35
  L 192.84 18.71
  Q 193.38 18.58 193.23 18.04
  C 192.74 16.35 184.19 17.00 182.44 17.01
  Q 181.75 17.01 181.75 17.71
  L 181.75 18.32
  Q 181.75 18.90 182.33 18.94
  L 184.83 19.11
  Q 185.50 19.16 185.50 19.82
  L 185.50 45.04
  Q 185.50 45.60 184.94 45.70
  C 183.72 45.90 180.20 45.05 181.08 47.64
  Q 181.23 48.07 181.68 48.04
  Q 187.05 47.72 192.40 47.97
  C 193.22 48.01 193.87 47.52 193.85 46.68
  Q 193.84 46.13 193.30 46.07
  L 190.32 45.73
  Q 189.50 45.64 189.50 44.82
  L 189.50 20.23
  Q 189.50 19.52 190.19 19.35
  Z"
        />
        <path
          fill="#454545"
          d="
  M 379.8316 47.5047
  A 16.99 16.54 65.7 0 1 357.7654 38.8264
  A 16.99 16.54 65.7 0 1 365.8484 16.5353
  A 16.99 16.54 65.7 0 1 387.9146 25.2136
  A 16.99 16.54 65.7 0 1 379.8316 47.5047
  Z
  M 383.99 38.36
  C 387.26 28.88 380.69 14.26 368.79 18.06
  C 359.70 20.96 359.05 30.62 362.13 38.29
  C 366.24 48.53 380.29 49.08 383.99 38.36
  Z"
        />
        <path
          fill="#050505"
          d="
  M 77.8929 47.2127
  A 16.98 16.56 63.4 0 1 55.4828 39.4449
  A 16.98 16.56 63.4 0 1 62.6871 16.8473
  A 16.98 16.56 63.4 0 1 85.0972 24.6151
  A 16.98 16.56 63.4 0 1 77.8929 47.2127
  Z
  M 72.8881 46.0988
  A 14.48 12.23 79.1 0 0 82.1594 29.5674
  A 14.48 12.23 79.1 0 0 67.4119 17.6612
  A 14.48 12.23 79.1 0 0 58.1406 34.1926
  A 14.48 12.23 79.1 0 0 72.8881 46.0988
  Z"
        />
        <path
          fill="#050505"
          d="
  M 31.18 45.64
  L 34.80 46.09
  Q 35.44 46.16 35.47 46.81
  C 35.53 47.81 34.77 48.12 33.86 48.09
  Q 28.13 47.90 22.38 48.04
  Q 21.75 48.06 21.75 47.43
  L 21.75 46.76
  Q 21.75 46.24 22.26 46.14
  L 25.89 45.39
  Q 26.50 45.26 26.50 44.64
  L 26.50 20.57
  A 1.06 1.06 0.0 0 0 25.44 19.51
  L 17.99 19.50
  Q 17.46 19.50 17.16 19.93
  C 16.18 21.33 15.50 24.30 13.69 24.58
  A 0.71 0.71 0.0 0 1 12.89 23.70
  L 14.52 17.21
  Q 14.68 16.57 15.35 16.56
  L 41.66 16.33
  Q 42.23 16.33 42.34 16.89
  L 43.58 23.26
  Q 43.73 24.00 42.97 24.00
  L 42.59 24.00
  Q 42.08 24.00 41.82 23.56
  L 39.69 19.98
  Q 39.40 19.50 38.85 19.50
  L 31.48 19.50
  Q 30.72 19.50 30.71 20.27
  L 30.49 44.86
  Q 30.49 45.55 31.18 45.64
  Z"
        />
        <path
          fill="#454545"
          d="
  M 449.34 28.55
  L 457.25 28.38
  Q 457.88 28.36 457.97 27.75
  L 458.32 25.41
  Q 458.42 24.75 459.09 24.75
  L 459.88 24.75
  Q 460.50 24.75 460.50 25.38
  L 460.50 34.30
  A 0.75 0.75 0.0 0 1 459.82 35.05
  L 459.11 35.11
  Q 458.46 35.17 458.38 34.52
  L 458.04 31.60
  Q 457.96 31.00 457.36 31.00
  L 450.03 31.00
  A 1.53 1.53 0.0 0 0 448.50 32.53
  L 448.50 43.92
  A 1.12 1.12 0.0 0 0 449.43 45.02
  C 451.84 45.42 459.62 46.07 461.09 43.63
  Q 462.36 41.53 463.82 39.58
  A 0.65 0.65 0.0 0 1 464.98 40.11
  L 463.46 47.16
  Q 463.31 47.84 462.61 47.82
  Q 452.09 47.47 441.65 48.20
  C 440.73 48.27 440.10 47.94 440.24 46.97
  Q 440.31 46.46 440.77 46.26
  L 444.00 44.84
  Q 444.50 44.62 444.50 44.07
  L 444.50 19.49
  A 0.90 0.90 0.0 0 0 443.53 18.59
  Q 441.81 18.74 440.35 17.79
  A 0.82 0.81 61.5 0 1 440.79 16.29
  L 461.71 16.23
  Q 462.26 16.23 462.49 16.73
  Q 463.89 19.88 463.93 23.36
  Q 463.94 24.85 462.94 23.74
  Q 461.08 21.68 459.80 19.17
  Q 459.59 18.76 459.13 18.76
  L 449.56 18.75
  Q 449.02 18.75 448.92 19.28
  Q 448.08 23.70 448.83 28.13
  Q 448.90 28.56 449.34 28.55
  Z"
        />
        <path
          fill="#050505"
          d="
  M 105.01 38.99
  C 105.86 46.09 118.13 48.02 122.45 43.49
  C 125.97 39.81 124.85 24.44 124.44 19.43
  Q 124.40 18.88 123.86 18.80
  L 121.20 18.40
  Q 120.49 18.30 120.75 17.63
  L 120.97 17.04
  Q 121.17 16.50 121.75 16.50
  L 129.26 16.50
  Q 129.81 16.50 130.01 17.01
  C 130.27 17.70 129.85 18.10 129.24 18.44
  C 124.01 21.28 129.72 38.62 125.12 44.26
  C 120.09 50.42 106.10 49.88 102.09 42.62
  C 99.57 38.07 100.72 26.40 100.67 20.74
  C 100.64 17.49 97.30 19.54 97.49 17.20
  A 0.77 0.76 -87.5 0 1 98.25 16.50
  L 108.26 16.50
  Q 108.78 16.50 108.76 17.01
  L 108.72 18.16
  Q 108.70 18.81 108.06 18.70
  Q 104.61 18.11 104.53 20.98
  Q 104.22 32.34 105.01 38.99
  Z"
        />
        <path
          fill="#050505"
          d="
  M 170.65 45.25
  C 169.87 50.06 164.82 48.47 162.70 45.54
  Q 158.77 40.11 154.83 34.61
  Q 152.83 31.84 149.44 32.93
  Q 149.00 33.08 149.00 33.54
  L 149.00 44.81
  Q 149.00 45.39 149.57 45.48
  L 153.27 46.04
  Q 153.83 46.12 154.08 46.63
  C 154.53 47.51 153.84 48.03 153.01 48.01
  Q 147.31 47.89 141.62 48.09
  Q 141.02 48.11 141.02 47.51
  L 141.02 46.41
  Q 141.02 45.68 141.73 45.86
  C 144.34 46.54 145.01 45.08 145.00 42.80
  Q 144.98 32.21 145.02 21.64
  C 145.03 19.76 144.60 18.97 142.68 18.92
  Q 142.14 18.90 141.62 18.74
  Q 140.57 18.43 140.75 17.46
  A 0.55 0.55 0.0 0 1 141.29 17.01
  C 146.00 17.07 151.16 16.03 155.73 16.90
  C 164.19 18.50 165.49 27.82 158.10 32.00
  A 0.47 0.46 55.7 0 0 157.97 32.70
  Q 162.15 37.93 165.75 43.51
  Q 167.56 46.32 170.30 44.98
  Q 170.73 44.77 170.65 45.25
  Z
  M 149.25 31.03
  C 164.41 33.37 160.79 15.25 149.20 18.68
  Q 148.75 18.82 148.75 19.29
  L 148.75 30.44
  Q 148.75 30.95 149.25 31.03
  Z"
        />
        <path
          fill="#050505"
          d="
  M 248.75 44.64
  L 248.75 20.16
  Q 248.75 19.51 248.10 19.51
  L 240.34 19.50
  Q 239.83 19.50 239.57 19.94
  L 237.02 24.29
  A 0.85 0.85 0.0 0 1 235.45 23.70
  L 236.69 17.23
  Q 236.83 16.50 237.57 16.50
  L 264.11 16.50
  Q 264.63 16.50 264.73 17.01
  L 265.85 22.91
  Q 265.96 23.46 265.58 23.88
  C 264.38 25.21 262.48 20.68 262.04 19.94
  Q 261.77 19.50 261.26 19.50
  L 253.75 19.50
  Q 253.00 19.50 253.00 20.25
  L 253.00 44.98
  Q 253.00 45.63 253.65 45.67
  L 256.32 45.82
  Q 256.77 45.84 257.16 46.08
  Q 258.38 46.81 257.82 47.58
  Q 257.53 47.97 257.04 47.97
  L 244.90 48.05
  Q 244.25 48.06 244.25 47.41
  L 244.25 46.84
  Q 244.25 46.36 244.71 46.24
  L 248.25 45.29
  Q 248.75 45.15 248.75 44.64
  Z"
        />
        <path
          fill="#454545"
          d="
  M 328.34 19.50
  L 320.33 19.50
  Q 319.81 19.50 319.57 19.95
  L 317.26 24.28
  A 0.92 0.92 0.0 0 1 315.55 23.64
  L 317.03 17.15
  Q 317.18 16.50 317.85 16.50
  L 344.14 16.50
  Q 344.76 16.50 344.88 17.12
  L 346.07 23.52
  A 0.68 0.68 0.0 0 1 344.83 24.01
  L 342.20 19.96
  Q 341.90 19.50 341.35 19.50
  L 334.07 19.51
  A 1.07 1.07 0.0 0 0 333.00 20.58
  C 332.99 28.18 332.09 37.71 333.30 45.09
  Q 333.38 45.55 333.84 45.61
  L 337.39 46.09
  Q 338.07 46.18 338.02 46.87
  L 337.98 47.46
  Q 337.94 47.93 337.48 47.93
  L 324.80 47.91
  Q 324.31 47.91 324.31 47.42
  L 324.31 46.84
  Q 324.31 46.28 324.87 46.18
  L 328.27 45.57
  Q 329.00 45.44 329.00 44.69
  L 329.00 20.15
  Q 329.00 19.50 328.34 19.50
  Z"
        />
        <path
          fill="#454545"
          d="
  M 417.57 32.66
  L 425.18 43.35
  Q 425.46 43.73 425.76 44.11
  Q 427.76 46.57 429.01 45.12
  Q 429.40 44.66 429.94 44.94
  C 430.28 45.12 430.37 45.31 430.19 45.69
  C 427.72 50.91 423.36 47.37 421.15 44.13
  Q 417.35 38.55 413.29 33.16
  Q 412.98 32.75 412.46 32.75
  L 409.00 32.75
  Q 408.26 32.75 408.26 33.50
  L 408.32 44.70
  Q 408.32 45.33 408.95 45.45
  L 412.94 46.19
  Q 413.49 46.29 413.57 46.85
  Q 413.73 48.10 412.74 48.07
  Q 404.02 47.85 401.33 47.91
  Q 400.81 47.93 400.68 47.43
  L 400.47 46.60
  Q 400.22 45.66 401.17 45.88
  Q 404.39 46.63 404.42 43.51
  Q 404.55 31.80 404.49 20.12
  Q 404.48 19.56 403.94 19.40
  C 403.02 19.13 399.89 18.83 400.00 17.57
  Q 400.04 17.00 400.61 17.01
  C 406.35 17.07 412.61 15.61 418.02 17.86
  C 424.69 20.65 423.09 28.53 417.73 31.89
  Q 417.25 32.19 417.57 32.66
  Z
  M 408.75 30.87
  C 412.22 31.82 419.04 30.47 418.99 25.76
  C 418.94 20.56 413.69 17.02 408.81 18.70
  Q 408.25 18.90 408.25 19.50
  L 408.25 30.22
  Q 408.25 30.73 408.75 30.87
  Z"
        />
        <path
          fill="#050505"
          d="
  M 219.35 17.98
  L 220.56 16.83
  Q 221.50 15.93 221.50 17.24
  L 221.50 25.01
  A 0.61 0.61 0.0 0 1 220.47 25.46
  Q 219.36 24.43 218.42 22.82
  C 213.47 14.35 204.05 22.07 210.49 27.09
  C 213.95 29.78 219.08 29.09 222.32 32.61
  C 230.61 41.60 218.11 53.70 207.68 45.74
  Q 207.34 45.48 206.90 45.49
  L 205.54 45.53
  Q 204.92 45.54 205.00 44.93
  L 206.08 37.13
  A 0.74 0.74 0.0 0 1 207.37 36.75
  Q 207.93 37.41 207.90 38.27
  C 207.66 46.49 219.79 49.18 221.42 40.84
  C 222.94 33.06 212.81 33.66 208.48 30.47
  C 200.36 24.49 208.36 13.22 218.46 18.12
  Q 218.96 18.36 219.35 17.98
  Z"
        />
        <path
          fill="#454545"
          d="
  M 288.15 37.42
  C 287.62 50.03 304.85 47.21 301.20 37.48
  C 299.49 32.93 293.56 33.20 289.97 31.28
  C 279.89 25.87 288.28 12.40 298.36 18.07
  Q 298.90 18.37 299.41 18.03
  L 301.14 16.88
  A 0.33 0.33 0.0 0 1 301.65 17.16
  L 301.63 25.05
  Q 301.63 25.50 301.18 25.50
  L 300.91 25.50
  Q 300.52 25.50 300.30 25.17
  C 298.50 22.43 297.13 19.43 293.45 19.08
  C 288.03 18.57 287.12 25.10 291.43 27.59
  C 295.22 29.77 299.98 29.32 302.90 33.11
  C 308.46 40.30 302.18 49.55 293.49 48.42
  C 290.77 48.07 288.62 45.92 285.47 45.32
  Q 285.01 45.23 285.08 44.77
  L 286.15 37.32
  Q 286.24 36.71 286.85 36.74
  L 287.56 36.78
  Q 288.17 36.81 288.15 37.42
  Z"
        />
        <path
          fill="#050505"
          d="
  M 189.50 20.23
  L 189.50 44.82
  Q 189.50 45.64 190.32 45.73
  L 193.30 46.07
  Q 193.84 46.13 193.85 46.68
  C 193.87 47.52 193.22 48.01 192.40 47.97
  Q 187.05 47.72 181.68 48.04
  Q 181.23 48.07 181.08 47.64
  C 180.20 45.05 183.72 45.90 184.94 45.70
  Q 185.50 45.60 185.50 45.04
  L 185.50 19.82
  Q 185.50 19.16 184.83 19.11
  L 182.33 18.94
  Q 181.75 18.90 181.75 18.32
  L 181.75 17.71
  Q 181.75 17.01 182.44 17.01
  C 184.19 17.00 192.74 16.35 193.23 18.04
  Q 193.38 18.58 192.84 18.71
  L 190.19 19.35
  Q 189.50 19.52 189.50 20.23
  Z"
        />
        <path
          fill="#ffffff"
          d="
  M 383.99 38.36
  C 380.29 49.08 366.24 48.53 362.13 38.29
  C 359.05 30.62 359.70 20.96 368.79 18.06
  C 380.69 14.26 387.26 28.88 383.99 38.36
  Z"
        />
        <ellipse
          fill="#ffffff"
          cx="0.00"
          cy="0.00"
          transform="translate(70.15,31.88) rotate(79.1)"
          rx="14.48"
          ry="12.23"
        />
        <path
          fill="#ffffff"
          d="
  M 149.20 18.68
  C 160.79 15.25 164.41 33.37 149.25 31.03
  Q 148.75 30.95 148.75 30.44
  L 148.75 19.29
  Q 148.75 18.82 149.20 18.68
  Z"
        />
        <path
          fill="#ffffff"
          d="
  M 418.99 25.76
  C 419.04 30.47 412.22 31.82 408.75 30.87
  Q 408.25 30.73 408.25 30.22
  L 408.25 19.50
  Q 408.25 18.90 408.81 18.70
  C 413.69 17.02 418.94 20.56 418.99 25.76
  Z"
        />
      </svg>
    </div>
  );
};

export default Logo;