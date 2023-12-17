

const Footer = () => {
    return (
        <div className="absolute flex right-0 bottom-0 flex-col items-center w-full bg-white p-8">
            <div className="max-w-5xl w-full">
                <div className="flex justify-between items-center">
                    <img
                        class="Emote_emote__Lckjz"
                        src="https://cdn.betterttv.net/emote/5ff10db95ae5852e4154a2c3/3x.webp"
                        alt="MOOOO, 3x"
                    />
                    <p className="hidden sm:text-5xl md:block font-black text-6xl tracking-tighter text-[#2B2B2B]">
                        “KEEP ON MOOING”
                    </p>
                    <div className="flex flex-col items-center gap-2">
                        <svg
                            width="181"
                            height="64"
                            viewBox="0 0 181 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M79.2605 37.7831V42.4097C79.2605 46.2651 77.904 48 74.0281 48H72.0902C68.2143 48 66.8578 46.0722 66.8578 42.4097V21.5903C66.8578 17.7349 68.2143 16 72.0902 16H74.0281C77.904 16 79.2605 17.9278 79.2605 21.5903V26.2169H94.9576V37.7831H79.2605ZM21.1232 38.3615L25.7742 12.9157H26.937L31.5879 38.3615H21.1232ZM0 62.6506H16.666L18.6039 51.8554H34.3009L36.2389 62.6506H53.4863L51.3545 52.4337H52.1298C54.8428 59.9518 61.0442 64 71.5089 64H73.4467C87.2059 64 93.9886 56.8675 94.3761 44.7228H95.3451V62.6506H135.46V51.4699H136.041C139.142 59.9518 145.731 64 156.195 64H158.52C173.249 64 181 56.4819 181 42.024V1.3494H163.366V42.7952C163.366 46.2651 162.009 48.1928 158.327 48.1928H156.39C152.513 48.1928 151.351 46.2651 151.351 42.7952V1.3494H133.716V46.0722H112.592V1.3494H94.9576V19.2772H93.9886C93.9886 7.51807 87.7872 0 73.8342 0H71.1212C56.0056 0 49.2229 7.71085 49.2229 21.5903V42.2169C49.2229 42.9879 49.2229 43.7591 49.2229 44.5301H48.6415L40.6961 1.3494H12.7902L0 62.6506Z"
                                fill="#2B2B2B"
                            />
                        </svg>
                        <div className="flex items-center gap-2">
                            <p className="text-[#2B2B2B] leading-trim text-cap font-black text-6xl max-sm:text-5xl tracking-tight">
                                © 2023
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer