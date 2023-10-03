import Svg, { Circle, Path } from "react-native-svg";

export const Flag = ({ locale, ...props }: any) => {
  return locale === "pt-BR" ? (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{ enableBackground: "new 0 0 512 512" }}
      viewBox="0 0 512 512"
      {...props}
    >
      <Circle cx={256} cy={256} r={256} fill="#6da544" />
      <Path
        d="M256 100.174 467.478 256 256 411.826 44.522 256z"
        fill="#ffda44"
      />
      <Circle cx={256} cy={256} r={89.043} fill="#f0f0f0" />
      <Path
        d="M211.478 250.435c-15.484 0-30.427 2.355-44.493 6.725.623 48.64 40.227 87.884 89.015 87.884 30.168 0 56.812-15.017 72.919-37.968-27.557-34.497-69.958-56.641-117.441-56.641zM343.393 273.06a89.45 89.45 0 0 0 1.651-17.06c0-49.178-39.866-89.043-89.043-89.043-36.694 0-68.194 22.201-81.826 53.899a183.693 183.693 0 0 1 37.305-3.812c51.717-.001 98.503 21.497 131.913 56.016z"
        fill="#0052b4"
      />
    </Svg>
  ) : locale === "en" ? (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        enableBackground: "new 0 0 473.677 473.677",
      }}
      viewBox="0 0 473.677 473.677"
      {...props}
    >
      <Path
        d="M1.068 258.99h471.56v.007H1.068zM25.629 129.7h422.42v.007H25.629zM8.831 172.79h456v.007h-456zM101.793 431.36h270.095l.014-.015H101.778zM236.837 0c-4.652 0-9.267.168-13.848.43h27.699C246.103.168 241.489 0 236.837 0zM.978 215.89h471.71v.007H.978z"
        fill="#c42126"
      />
      <Path
        d="M306.838 86.609H419.93c-13.433-16.353-29.045-30.829-46.341-43.084h-84.922c7.027 12.363 13.07 26.951 18.171 43.084z"
        fill="#e7e7e7"
      />
      <Path
        d="M288.667 43.525h84.922C338.482 18.646 296.333 3.066 250.688.43h-7.292c21.484 2.704 31.352 18.604 45.271 43.095z"
        fill="#dc3027"
      />
      <Path
        d="M464.846 172.794a235.273 235.273 0 0 0-16.798-43.084H317.94c2.636 13.833 4.716 28.282 6.256 43.084h140.65z"
        fill="#e7e7e7"
      />
      <Path
        d="M310.622 129.703h137.422c-7.831-15.403-17.239-29.857-28.114-43.091H299.886c4.233 13.399 7.827 27.853 10.736 43.091z"
        fill="#dc3027"
      />
      <Path
        d="M329.178 258.98h143.431c.681-7.288 1.066-14.674 1.066-22.138 0-7.064-.37-14.038-.976-20.949H329.212a644.79 644.79 0 0 1-.034 43.087z"
        fill="#e7e7e7"
      />
      <Path
        d="M472.703 215.886a235.89 235.89 0 0 0-7.857-43.084H318.154c1.473 14.109 2.446 28.544 2.921 43.084h151.628z"
        fill="#dc3027"
      />
      <Path
        d="M315.465 345.166h131.962a234.945 234.945 0 0 0 17.075-43.091H321.845c-1.571 14.824-3.703 29.27-6.38 43.091z"
        fill="#e7e7e7"
      />
      <Path
        d="M464.506 302.072a235.37 235.37 0 0 0 8.107-43.084H324.709c-.505 14.551-1.507 28.982-3.01 43.084h142.807z"
        fill="#dc3027"
      />
      <Path
        d="M371.902 431.345c17.546-12.206 33.379-26.697 47.025-43.084H307.806c-5.194 16.2-11.361 30.765-18.515 43.084h82.611z"
        fill="#e7e7e7"
      />
      <Path
        d="M303.625 388.258h115.302c11.002-13.219 20.553-27.673 28.499-43.091h-132.93c-2.95 15.249-6.581 29.71-10.871 43.091zM228.254 473.509c-.479-.015-.957-.037-1.436-.052.479.014.958.037 1.436.052zM236.837 473.677c50.211 0 96.735-15.673 135.051-42.317h-85.715c-15.213 26.21-25.25 42.317-49.336 42.317z"
        fill="#dc3027"
      />
      <Path
        d="M236.837 473.677c-2.876 0-5.733-.067-8.582-.168 2.879.097 5.739.168 8.582.168z"
        fill="#c42126"
      />
      <Path
        d="M296.509 43.525H100.092C82.793 55.78 67.184 70.255 53.747 86.609h260.929c-5.101-16.133-11.14-30.721-18.167-43.084z"
        fill="#f3f4f5"
      />
      <Path
        d="M100.092 43.525h196.417C282.587 19.034 264.88 3.134 243.396.43h-20.407c-45.645 2.636-87.794 18.216-122.897 43.095z"
        fill="#e73625"
      />
      <Path
        d="M8.835 172.794h322.83c-1.541-14.805-3.62-29.251-6.256-43.084H25.633a235.229 235.229 0 0 0-16.798 43.084z"
        fill="#f3f4f5"
      />
      <Path
        d="M53.747 86.609C42.88 99.843 33.464 114.296 25.637 129.7h299.772c-2.906-15.235-6.499-29.688-10.733-43.091H53.747z"
        fill="#e73625"
      />
      <Path
        d="M.002 236.842c0 7.464.389 14.85 1.066 22.138h333.491c.494-14.323.501-28.754.034-43.084H.978c-.606 6.908-.976 13.882-.976 20.946z"
        fill="#f3f4f5"
      />
      <Path
        d="M.978 215.886h333.611a608.368 608.368 0 0 0-2.921-43.084H8.831a235.592 235.592 0 0 0-7.853 43.084z"
        fill="#e73625"
      />
      <Path
        d="M331.549 302.072H9.175a235.116 235.116 0 0 0 17.075 43.091h298.919c2.678-13.818 4.805-28.264 6.38-43.091z"
        fill="#f3f4f5"
      />
      <Path
        d="M9.175 302.072h322.374c1.5-14.102 2.505-28.537 3.01-43.084H1.068a235.66 235.66 0 0 0 8.107 43.084z"
        fill="#e73625"
      />
      <Path
        d="M101.778 431.345h194.009c7.154-12.322 13.324-26.884 18.515-43.084H54.753a238.109 238.109 0 0 0 47.025 43.084z"
        fill="#f3f4f5"
      />
      <Path
        d="M26.254 345.166c7.947 15.418 17.497 29.872 28.499 43.091h259.549c4.286-13.38 7.917-27.841 10.867-43.091H26.254zM226.818 473.456c.479.015.957.037 1.436.052 2.85.101 5.707.168 8.582.168 24.087 0 43.727-16.106 58.943-42.317H101.793c35.747 24.862 78.655 40.164 125.025 42.097z"
        fill="#e73625"
      />
      <Path
        d="M231.941.123C110.574 2.592 11.654 96.301 1.008 215.5h230.937V.123h-.004z"
        fill="#283991"
      />
      <Path
        d="m47.39 134.187 3.608 11.11h11.69l-9.457 6.87 3.612 11.118-9.453-6.874-9.45 6.874 3.605-11.118-9.454-6.87h11.69zM47.39 173.438l3.608 11.117h11.69l-9.457 6.87 3.612 11.118-9.453-6.874-9.45 6.874 3.605-11.118-9.454-6.87h11.69zM86.648 75.296l3.609 11.114h11.686l-9.454 6.874 3.609 11.11-9.45-6.866-9.454 6.866 3.609-11.11-9.458-6.874h11.69zM86.648 114.554l3.609 11.114h11.686l-9.454 6.866 3.609 11.118-9.45-6.866-9.454 6.866 3.609-11.118-9.458-6.866h11.69zM86.648 153.812l3.609 11.118h11.686l-9.454 6.862 3.609 11.118-9.45-6.873-9.454 6.873 3.609-11.118-9.458-6.862h11.69zM17.585 182.91l-3.612-11.118 9.454-6.866H11.744l-.262-.811a226.718 226.718 0 0 0-3.511 12.045l.165-.123 9.449 6.873zM37.94 124.027l9.45-6.873 9.454 6.873-3.612-11.118 9.454-6.873h-11.69l-3.609-11.11-3.609 11.11H39.47c-.8 1.212-1.574 2.431-2.352 3.661l4.428 3.212-3.606 11.118zM86.648 58.27l9.45 6.866-3.609-11.11 9.45-6.873h-6.75a235.186 235.186 0 0 0-16.578 13.608l-1.425 4.375 9.462-6.866zM116.452 45.511l9.454-6.873 9.45 6.873-3.609-11.118 9.45-6.866h-11.686l-.49-1.496c-3.96 2.023-7.879 4.128-11.709 6.368l2.745 1.993-3.605 11.119zM125.906 55.671l3.609 11.107h11.686l-9.454 6.873 3.609 11.118-9.45-6.874-9.454 6.874 3.609-11.118-9.457-6.873h11.689zM125.906 94.929l3.609 11.107h11.686l-9.454 6.873 3.609 11.118-9.45-6.874-9.454 6.874 3.609-11.118-9.457-6.873h11.689zM125.906 134.187l3.609 11.11h11.686l-9.454 6.87 3.609 11.118-9.45-6.874-9.454 6.874 3.609-11.118-9.457-6.87h11.689zM125.906 173.438l3.609 11.117h11.686l-9.454 6.87 3.609 11.118-9.45-6.874-9.454 6.874 3.609-11.118-9.457-6.87h11.689zM165.164 36.038l3.609 11.114h11.686l-9.45 6.874 3.605 11.11-9.45-6.866-9.457 6.866 3.612-11.11-9.457-6.874h11.689zM165.164 75.296l3.609 11.114h11.686l-9.45 6.874 3.605 11.11-9.45-6.866-9.457 6.866 3.612-11.11-9.457-6.874h11.689zM165.164 114.554l3.609 11.114h11.686l-9.45 6.866 3.605 11.118-9.45-6.866-9.457 6.866 3.612-11.118-9.457-6.866h11.689zM165.164 153.812l3.609 11.118h11.686l-9.45 6.862 3.605 11.118-9.45-6.873-9.457 6.873 3.612-11.118-9.457-6.862h11.689zM204.422 16.413l3.609 11.114h11.686l-9.454 6.866 3.609 11.118-9.45-6.874-9.457 6.874 3.612-11.118-9.457-6.866h11.686zM204.422 55.671l3.609 11.107h11.686l-9.454 6.873 3.609 11.118-9.45-6.874-9.457 6.874 3.612-11.118-9.457-6.873h11.686zM204.422 94.929l3.609 11.107h11.686l-9.454 6.873 3.609 11.118-9.45-6.874-9.457 6.874 3.612-11.118-9.457-6.873h11.686zM204.422 134.187l3.609 11.11h11.686l-9.454 6.87 3.609 11.118-9.45-6.874-9.457 6.874 3.612-11.118-9.457-6.87h11.686zM204.422 173.438l3.609 11.117h11.686l-9.454 6.87 3.609 11.118-9.45-6.874-9.457 6.874 3.612-11.118-9.457-6.87h11.686z"
        fill="#efefef"
      />
    </Svg>
  ) : null;
};
