import React from "react";
interface FooterProps {}

function Footer(props: FooterProps) {
  return (
    <div className="h-[50px] bg-[#E7F4FF] mt-5 md:mt-10 w-full flex justify-center items-center mx-auto px-4">
      <span className="text-xs text-[#737373]">
        © Copyright 20213– 2024 ProfileRoute.
      </span>
      <div className="flex justify-between ml-2 w-[80px]">
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.1666 7.71362C16.1666 3.4534 12.7343 0 8.50094 0C4.26563 0.000958214 0.833313 3.4534 0.833313 7.71458C0.833313 11.5637 3.63705 14.7546 7.30125 15.3333V9.94338H5.35608V7.71458H7.30317V6.01375C7.30317 4.08103 8.44824 3.01358 10.1989 3.01358C11.0383 3.01358 11.9151 3.16402 11.9151 3.16402V5.06128H10.9482C9.99671 5.06128 9.69966 5.65633 9.69966 6.26672V7.71362H11.825L11.4858 9.94242H9.6987V15.3324C13.3629 14.7536 16.1666 11.5628 16.1666 7.71362Z"
            fill="#23A6F0"
          />
        </svg>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.83333 0.666504C5.84325 0.666504 5.593 0.675671 4.81108 0.710504C4.02917 0.747171 3.49658 0.870004 3.03 1.0515C2.54059 1.23559 2.09728 1.52434 1.73108 1.89759C1.35807 2.26398 1.06935 2.70722 0.885 3.1965C0.7035 3.66217 0.57975 4.19567 0.544 4.97484C0.509167 5.75859 0.5 6.00792 0.5 8.00075C0.5 9.99175 0.509167 10.2411 0.544 11.023C0.580667 11.804 0.7035 12.3366 0.885 12.8032C1.07292 13.2853 1.32317 13.6942 1.73108 14.1021C2.13808 14.51 2.54692 14.7612 3.02908 14.9482C3.49658 15.1297 4.02825 15.2534 4.80925 15.2892C5.59208 15.324 5.84142 15.3332 7.83333 15.3332C9.82525 15.3332 10.0737 15.324 10.8565 15.2892C11.6366 15.2525 12.171 15.1297 12.6376 14.9482C13.1267 14.764 13.5697 14.4752 13.9356 14.1021C14.3435 13.6942 14.5938 13.2853 14.7817 12.8032C14.9623 12.3366 15.086 11.804 15.1227 11.023C15.1575 10.2411 15.1667 9.99175 15.1667 7.99984C15.1667 6.00792 15.1575 5.75859 15.1227 4.97575C15.086 4.19567 14.9623 3.66217 14.7817 3.1965C14.5973 2.70721 14.3086 2.26396 13.9356 1.89759C13.5695 1.52421 13.1262 1.23543 12.6367 1.0515C12.1692 0.870004 11.6357 0.746254 10.8556 0.710504C10.0727 0.675671 9.82433 0.666504 7.8315 0.666504H7.83333ZM7.17608 1.98834H7.83425C9.79225 1.98834 10.0242 1.99475 10.7969 2.0305C11.5119 2.06259 11.9006 2.18267 12.1591 2.28259C12.501 2.4155 12.7457 2.575 13.0024 2.83167C13.2591 3.08834 13.4177 3.33217 13.5506 3.675C13.6514 3.93259 13.7706 4.32125 13.8027 5.03625C13.8384 5.809 13.8457 6.04092 13.8457 7.998C13.8457 9.95509 13.8384 10.1879 13.8027 10.9607C13.7706 11.6757 13.6505 12.0634 13.5506 12.3219C13.433 12.6403 13.2454 12.9282 13.0015 13.1643C12.7448 13.421 12.501 13.5796 12.1582 13.7125C11.9015 13.8133 11.5128 13.9325 10.7969 13.9655C10.0242 14.0003 9.79225 14.0086 7.83425 14.0086C5.87625 14.0086 5.64342 14.0003 4.87067 13.9655C4.15567 13.9325 3.76792 13.8133 3.50942 13.7125C3.19087 13.5951 2.9027 13.4078 2.66608 13.1643C2.42202 12.9279 2.23408 12.6397 2.11608 12.321C2.01617 12.0634 1.89608 11.6748 1.864 10.9598C1.82917 10.187 1.82183 9.95509 1.82183 7.99617C1.82183 6.03817 1.82917 5.80717 1.864 5.03442C1.897 4.31942 2.01617 3.93075 2.117 3.67225C2.24992 3.33034 2.40942 3.08559 2.66608 2.82892C2.92275 2.57225 3.16658 2.41367 3.50942 2.28075C3.76792 2.17992 4.15567 2.06075 4.87067 2.02775C5.54717 1.99659 5.80933 1.98742 7.17608 1.9865V1.98834ZM11.7484 3.20567C11.6329 3.20567 11.5184 3.22843 11.4117 3.27266C11.3049 3.31688 11.2079 3.3817 11.1262 3.46342C11.0444 3.54513 10.9796 3.64214 10.9354 3.74891C10.8912 3.85568 10.8684 3.97011 10.8684 4.08567C10.8684 4.20123 10.8912 4.31567 10.9354 4.42243C10.9796 4.5292 11.0444 4.62621 11.1262 4.70792C11.2079 4.78964 11.3049 4.85446 11.4117 4.89868C11.5184 4.94291 11.6329 4.96567 11.7484 4.96567C11.9818 4.96567 12.2056 4.87296 12.3707 4.70792C12.5357 4.54289 12.6284 4.31906 12.6284 4.08567C12.6284 3.85228 12.5357 3.62845 12.3707 3.46342C12.2056 3.29838 11.9818 3.20567 11.7484 3.20567ZM7.83425 4.23417C7.33473 4.22638 6.83865 4.31803 6.3749 4.5038C5.91114 4.68957 5.48897 4.96574 5.13297 5.31623C4.77697 5.66671 4.49425 6.08452 4.30127 6.54533C4.10829 7.00613 4.00891 7.50072 4.00891 8.0003C4.00891 8.49987 4.10829 8.99446 4.30127 9.45527C4.49425 9.91607 4.77697 10.3339 5.13297 10.6844C5.48897 11.0349 5.91114 11.311 6.3749 11.4968C6.83865 11.6826 7.33473 11.7742 7.83425 11.7664C8.82291 11.751 9.76586 11.3474 10.4596 10.6428C11.1533 9.93821 11.5421 8.98908 11.5421 8.0003C11.5421 7.01151 11.1533 6.06238 10.4596 5.35777C9.76586 4.65317 8.82291 4.2496 7.83425 4.23417ZM7.83425 5.55509C8.48264 5.55509 9.10447 5.81266 9.56295 6.27114C10.0214 6.72962 10.279 7.35145 10.279 7.99984C10.279 8.64822 10.0214 9.27006 9.56295 9.72854C9.10447 10.187 8.48264 10.4446 7.83425 10.4446C7.18586 10.4446 6.56403 10.187 6.10555 9.72854C5.64707 9.27006 5.3895 8.64822 5.3895 7.99984C5.3895 7.35145 5.64707 6.72962 6.10555 6.27114C6.56403 5.81266 7.18586 5.55509 7.83425 5.55509Z"
            fill="#23A6F0"
          />
        </svg>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.10717 15.2858C10.642 15.2858 13.6698 9.67832 13.6698 4.82406C13.6698 4.66714 13.6698 4.50798 13.6643 4.35107C14.2537 3.82931 14.7625 3.18335 15.1667 2.44344C14.616 2.74029 14.0325 2.93593 13.4351 3.02402C14.0644 2.56408 14.5357 1.8404 14.7615 0.987491C14.1702 1.41578 13.5231 1.71644 12.8484 1.8763C12.3948 1.28566 11.7946 0.894371 11.1407 0.763056C10.4869 0.63174 9.81583 0.767723 9.23156 1.14994C8.64729 1.53216 8.18241 2.13928 7.90891 2.87726C7.63542 3.61524 7.56858 4.4429 7.71875 5.23203C6.52226 5.15868 5.35175 4.77863 4.28312 4.11653C3.2145 3.45443 2.27163 2.52508 1.51567 1.38874C1.1319 2.19919 1.01478 3.15785 1.18809 4.07004C1.36141 4.98224 1.81217 5.77959 2.44883 6.30017C1.97174 6.28036 1.50514 6.12371 1.08667 5.84288V5.89332C1.08749 6.74232 1.32803 7.56493 1.76763 8.22211C2.20724 8.87929 2.81894 9.33073 3.49933 9.50011C3.24107 9.58711 2.97429 9.63047 2.70642 9.62901C2.51757 9.62971 2.3291 9.60831 2.14358 9.56512C2.33589 10.296 2.71033 10.9349 3.21448 11.3926C3.71862 11.8502 4.32721 12.1036 4.955 12.1172C3.88851 13.1414 2.57112 13.6969 1.215 13.6942C0.976044 13.6955 0.737255 13.6786 0.5 13.6438C1.87639 14.7167 3.47486 15.2864 5.10717 15.2858Z"
            fill="#23A6F0"
          />
        </svg>
      </div>
    </div>
  );
}

export default Footer;