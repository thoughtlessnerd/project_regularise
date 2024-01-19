import Navbar from '../Navbar';

function LandingPage() {
  return (
    <>
        <section className='min-h-screen container mx-auto p-2 md:px-8 flex flex-col justify-between'>
            <Navbar className='md:absolute top-0 w-full'/>
            <div className="grow flex flex-col md:flex-row-reverse">
                <div className="w-full">
                <svg
                    className='w-full h-full object-contain'
                    xmlns="http://www.w3.org/2000/svg"
                    width="500"
                    height="504"
                    fill="none"
                    viewBox="0 0 500 504"
                    >
                    <path
                        fill="#0E1117"
                        d="M119.54 304.698c49.25 38.546 164.38 75.842 268.86 32.982 0 0 67.79-29.02 68-98.139.22-63.937-69.59-108.047-151.58-78.382-66.91 24.192-90-49.483-150.49-66.135C55.71 67.86 7.69 217.133 119.54 304.698z"
                    ></path>
                    <g opacity="0.9">
                        <path
                        fill="#0F131A"
                        d="M119.54 304.698c49.25 38.546 164.38 75.842 268.86 32.982 0 0 67.79-29.02 68-98.139.22-63.937-69.59-108.047-151.58-78.382-66.91 24.192-90-49.483-150.49-66.135C55.71 67.86 7.69 217.133 119.54 304.698z"
                        ></path>
                        <path
                        stroke="#FBFCFE"
                        strokeOpacity="0.1"
                        strokeWidth="2"
                        d="M305.16 162.099h0c-16.916 6.117-31.125 6.063-43.863 2.232-12.707-3.822-23.877-11.381-34.757-20.144-4.489-3.616-8.946-7.451-13.443-11.321l-2.862-2.461c-5.481-4.703-11.052-9.407-16.884-13.823-11.663-8.83-24.333-16.477-39.286-20.594h0c-24.389-6.718-45.572-2.517-61.935 8.845-16.383 11.376-28.016 29.991-33.147 52.229-10.257 44.463 5.531 103.288 61.174 146.849 24.477 19.157 65.415 38.061 113.282 46.822 47.852 8.758 102.55 7.364 154.573-13.975l.004-.001.005-.002M305.16 162.099l-.34-.94c81.99-29.665 151.8 14.445 151.58 78.382-.21 69.119-68 98.139-68 98.139l-.379-.925M305.16 162.099c40.761-14.747 78.406-11.129 105.795 4.025 27.383 15.151 44.554 41.842 44.445 73.414-.104 34.198-16.917 58.488-33.762 74.262-8.423 7.888-16.842 13.634-23.156 17.407a118.084 118.084 0 01-7.616 4.197 75.836 75.836 0 01-2.678 1.277l-.041.018a3.708 3.708 0 01-.098.043l-.028.013M305.16 162.099l82.861 174.656"
                        ></path>
                    </g>
                    <path
                        fill="#0F131A"
                        d="M253.61 462.591c109.833 0 198.87-2.459 198.87-5.493 0-3.034-89.037-5.494-198.87-5.494s-198.87 2.46-198.87 5.494 89.037 5.493 198.87 5.493z"
                    ></path>
                    <path
                        stroke="#FBFCFE"
                        strokeOpacity="0.1"
                        d="M451.322 457.019c.1.027.19.053.269.079a6.533 6.533 0 01-.269.079c-.646.176-1.63.354-2.949.532-2.632.356-6.525.7-11.554 1.028-10.054.657-24.608 1.249-42.6 1.746-35.983.994-85.696 1.608-140.609 1.608-54.913 0-104.626-.614-140.609-1.608-17.992-.497-32.546-1.089-42.6-1.746-5.029-.328-8.922-.672-11.554-1.028-1.319-.178-2.303-.356-2.949-.532-.1-.027-.19-.054-.269-.079.08-.026.169-.052.269-.079.646-.176 1.63-.355 2.95-.533 2.63-.355 6.524-.699 11.553-1.028 10.054-.656 24.608-1.248 42.6-1.745 35.983-.994 85.696-1.609 140.609-1.609 54.913 0 104.626.615 140.609 1.609 17.992.497 32.546 1.089 42.6 1.745 5.029.329 8.922.673 11.554 1.028 1.319.178 2.303.357 2.949.533z"
                    ></path>
                    <path
                        fill="#407BFF"
                        d="M428.53 279.639h-91.72v173.457h91.72V279.639z"
                    ></path>
                    <path
                        fill="#263238"
                        d="M336.81 332.569h-5.17v5.212h5.17v-5.212zM336.81 288.913h-5.17v5.211h5.17v-5.211z"
                    ></path>
                    <path
                        fill="#000"
                        d="M416.8 337.781h-79.99v.897h79.99v-.897z"
                        opacity="0.2"
                    ></path>
                    <path fill="#263238" d="M416.8 279.639h-.89v173.457h.89V279.639z"></path>
                    <path
                        fill="#407BFF"
                        d="M428.53 240.358v39.312H416.8v-27.489c0-1.552.303-3.09.893-4.524a11.807 11.807 0 012.543-3.836 11.717 11.717 0 013.805-2.563c1.423-.595 2.949-.9 4.489-.9z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M428.53 240.358v39.312H416.8v-27.489c0-1.552.303-3.09.893-4.524a11.807 11.807 0 012.543-3.836 11.717 11.717 0 013.805-2.563c1.423-.595 2.949-.9 4.489-.9z"
                        opacity="0.5"
                    ></path>
                    <path
                        fill="#263238"
                        d="M372.6 276.636h-25.96v3.003h25.96v-3.003zM409.6 276.636h-25.96v3.003h25.96v-3.003zM359.67 453.096h-11.03v4.002h11.03v-4.002zM413.67 453.096h-11.03v4.002h11.03v-4.002zM114.51 278.964h52a1.813 1.813 0 001.476-.759 1.836 1.836 0 00.254-1.65l-11.33-34.635a1.825 1.825 0 00-1.73-1.27h-51.95a1.813 1.813 0 00-1.476.759 1.836 1.836 0 00-.254 1.65l11.28 34.645c.123.365.355.683.665.909.31.226.682.348 1.065.351z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M136.08 261.606c.36 2.389-1 4.314-2.94 4.314s-3.89-1.925-4.26-4.314c-.37-2.389 1-4.304 2.94-4.304s3.89 1.925 4.26 4.304z"
                        opacity="0.3"
                    ></path>
                    <path
                        fill="#263238"
                        d="M185 278.208l1.1 3.336a1.581 1.581 0 01-.237 1.383 1.545 1.545 0 01-1.243.633h-68.84a1.527 1.527 0 01-.907-.293 1.555 1.555 0 01-.563-.775l-1.43-4.284H185z"
                    ></path>
                    <g opacity="0.3">
                        <path
                        fill="#fff"
                        d="M185 278.208l1.1 3.336a1.581 1.581 0 01-.237 1.383 1.545 1.545 0 01-1.243.633h-68.84a1.527 1.527 0 01-.907-.293 1.555 1.555 0 01-.563-.775l-1.43-4.284H185z"
                        opacity="0.4"
                        ></path>
                    </g>
                    <path
                        fill="#407BFF"
                        d="M210.44 283.581H83.31v10.543h127.13v-10.543z"
                    ></path>
                    <path
                        fill="#263238"
                        d="M149.51 294.124h-5.26v158.972h5.26V294.124z"
                    ></path>
                    <path
                        fill="#407BFF"
                        d="M183.66 457.047h-73.54a14.258 14.258 0 015.162-4.985 14.12 14.12 0 016.918-1.819h49.36c2.426.001 4.812.628 6.929 1.821a14.273 14.273 0 015.171 4.993v-.01zM158.94 150.454H66.82v9.667h92.12v-9.667zM74.17 160.121l4.22 9.586h6.22v-9.586H74.17z"
                    ></path>
                    <path
                        fill="#407BFF"
                        d="M74.17 160.121l4.22 9.586h6.22v-9.586H74.17z"
                    ></path>
                    <path
                        fill="#000"
                        d="M74.17 160.121l4.22 9.586h6.22v-9.586H74.17z"
                        opacity="0.3"
                    ></path>
                    <path
                        fill="#407BFF"
                        d="M151.59 160.121l-4.22 9.586h-6.22v-9.586h10.44z"
                    ></path>
                    <path
                        fill="#000"
                        d="M151.59 160.121l-4.22 9.586h-6.22v-9.586h10.44z"
                        opacity="0.3"
                    ></path>
                    <path
                        fill="#407BFF"
                        d="M95.38 126.383V108.35a.447.447 0 00-.251-.47.447.447 0 00-.368 0 .45.45 0 00-.239.281.447.447 0 00-.012.189v18.033h.87z"
                    ></path>
                    <path
                        fill="#000"
                        d="M95.38 126.383V108.35a.447.447 0 00-.251-.47.447.447 0 00-.368 0 .45.45 0 00-.239.281.447.447 0 00-.012.189v18.033h.87z"
                        opacity="0.3"
                    ></path>
                    <path
                        fill="#263238"
                        d="M87.7 147.108l.44 1.632.09.343.37 1.361h12.69l.37-1.361.09-.343.44-1.632.09-.353 4.35-16.239.09-.343.44-1.633.09-.353.48-1.804H82.16l.48 1.804.09.353.44 1.633.09.343 4.35 16.239.09.353z"
                    ></path>
                    <path
                        fill="#407BFF"
                        d="M93.4 114.559a1.219 1.219 0 001.31-.494c.103-.136.171-.295.2-.463a.787.787 0 000-.273c0-.29-.099-.571-.28-.796-1.66-2.016-10-11.763-13.94-7.691-4.69 4.929 8.14 8.598 12.71 9.717z"
                    ></path>
                    <path
                        fill="#000"
                        d="M86 108.864l8.71 5.191c.103-.136.171-.295.2-.463l-8.65-5.161a.249.249 0 00-.34.09.25.25 0 00-.033.189.247.247 0 00.113.154z"
                        opacity="0.3"
                    ></path>
                    <path
                        fill="#407BFF"
                        d="M94.94 118.158c-.01.09-.01.181 0 .272a1.276 1.276 0 00.791.909c.233.088.487.104.729.049 4.57-1.129 17.41-4.799 12.67-9.718-3.91-4.032-12.27 5.665-13.93 7.681a1.328 1.328 0 00-.26.807z"
                    ></path>
                    <path
                        fill="#000"
                        d="M95 118.43c.039.167.11.325.21.464l8.71-5.192a.272.272 0 00.08-.352.217.217 0 00-.065-.073.239.239 0 00-.088-.042.244.244 0 00-.187.034L95 118.43z"
                        opacity="0.3"
                    ></path>
                    <path
                        fill="#407BFF"
                        d="M94 108.269a1.3 1.3 0 00.38.766c.065.063.135.121.21.172.149.085.311.143.48.171a1.271 1.271 0 001.26-.625c2.34-4.102 8.56-16.007 1.76-15.946-5.64.04-4.41 12.872-4.09 15.462z"
                    ></path>
                    <path
                        fill="#000"
                        d="M94.58 109.207c.149.085.311.143.48.171l2.28-9.939a.265.265 0 00-.19-.302.247.247 0 00-.26.1.253.253 0 00-.04.091l-2.27 9.879z"
                        opacity="0.3"
                    ></path>
                    <path
                        fill="#407BFF"
                        d="M93.4 124.911a1.229 1.229 0 001.31-.494c.103-.136.171-.295.2-.463a.781.781 0 000-.272c0-.29-.099-.572-.28-.797-1.66-2.016-10-11.763-13.94-7.691-4.69 4.929 8.14 8.598 12.71 9.717z"
                    ></path>
                    <path
                        fill="#000"
                        d="M86 119.226l8.71 5.191c.103-.136.171-.295.2-.463l-8.65-5.161a.248.248 0 00-.34.091.238.238 0 00-.033.188.24.24 0 00.113.154z"
                        opacity="0.3"
                    ></path>
                    <path
                        fill="#407BFF"
                        d="M112.78 143.408h-.92v-1.391h34.85a4.177 4.177 0 012.83 1.306 4.24 4.24 0 011.155 2.913 4.24 4.24 0 01-1.155 2.912 4.173 4.173 0 01-2.83 1.306h-34.85v-1.199h.92v-5.847z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M112.54 143.408v5.847h32a2.851 2.851 0 002.011-.873 2.89 2.89 0 00.809-2.051 2.975 2.975 0 00-.82-2.076 2.808 2.808 0 00-2-.847h-32z"
                    ></path>
                    <path
                        fill="#E6E6E6"
                        d="M112.54 144.88v.897h31.15a.443.443 0 00.44-.444.457.457 0 00-.128-.317.444.444 0 00-.312-.136h-31.15zM112.54 147.087v.887h31.15a.436.436 0 00.311-.129.445.445 0 00-.311-.758h-31.15z"
                    ></path>
                    <path
                        fill="#407BFF"
                        d="M112.78 134.971h-.92v-1.391h34.85a4.177 4.177 0 012.83 1.306 4.24 4.24 0 011.155 2.913 4.24 4.24 0 01-1.155 2.912 4.173 4.173 0 01-2.83 1.306h-34.85v-1.199h.92v-5.847z"
                    ></path>
                    <path
                        fill="#000"
                        d="M112.78 134.971h-.92v-1.391h34.85a4.177 4.177 0 012.83 1.306 4.24 4.24 0 011.155 2.913 4.24 4.24 0 01-1.155 2.912 4.173 4.173 0 01-2.83 1.306h-34.85v-1.199h.92v-5.847z"
                        opacity="0.3"
                    ></path>
                    <path
                        fill="#fff"
                        d="M112.54 134.971v5.847h32a2.851 2.851 0 002.011-.873 2.89 2.89 0 00.809-2.051 2.954 2.954 0 00-.82-2.066 2.767 2.767 0 00-2-.857h-32z"
                    ></path>
                    <path
                        fill="#E6E6E6"
                        d="M112.54 136.453v.887h31.15a.443.443 0 000-.887h-31.15zM112.54 138.65v.898h31.15a.449.449 0 00.44-.454.443.443 0 00-.44-.444h-31.15z"
                    ></path>
                    <path
                        fill="#0F131A"
                        d="M323.86 130.939a16.228 16.228 0 01-2.056 7.951 16.07 16.07 0 01-5.675 5.898 15.91 15.91 0 01-7.821 2.315 15.902 15.902 0 01-7.938-1.87l-6 4.032 2.21-6.865a16.163 16.163 0 01-4.024-6.709 16.248 16.248 0 01-.409-7.829 16.192 16.192 0 013.3-7.099 16.02 16.02 0 016.232-4.691 15.887 15.887 0 0115.021 1.444 16.093 16.093 0 015.24 5.793 16.236 16.236 0 011.91 7.6l.01.03z"
                    ></path>
                    <path
                        stroke="#FBFCFE"
                        strokeOpacity="0.1"
                        d="M295.288 148.045l1.768-5.492.094-.29-.216-.216a15.65 15.65 0 01-3.899-6.502 15.756 15.756 0 01-.398-7.588 15.683 15.683 0 013.199-6.879 15.508 15.508 0 016.037-4.545 15.385 15.385 0 0114.549 1.398 15.58 15.58 0 015.076 5.614 15.729 15.729 0 011.852 7.365v.08l.01.03a15.721 15.721 0 01-1.993 7.626 15.562 15.562 0 01-5.498 5.715 15.414 15.414 0 01-7.576 2.242 15.405 15.405 0 01-7.687-1.811l-.265-.142-.25.168-4.803 3.227z"
                    ></path>
                    <path
                        fill="#4171C3"
                        d="M307.84 132.955c1.105 0 2-.902 2-2.016a2.008 2.008 0 00-2-2.016c-1.104 0-2 .903-2 2.016 0 1.114.896 2.016 2 2.016zM301.09 132.955c1.105 0 2-.902 2-2.016a2.008 2.008 0 00-2-2.016c-1.104 0-2 .903-2 2.016 0 1.114.896 2.016 2 2.016zM314.59 132.955c1.105 0 2-.902 2-2.016a2.008 2.008 0 00-2-2.016c-1.104 0-2 .903-2 2.016 0 1.114.896 2.016 2 2.016z"
                    ></path>
                    <path
                        fill="#407BFF"
                        d="M240.44 175.594l-.15.292-6.66 13.174a184.457 184.457 0 01-11.45-6.048c-2.18-1.249-4.34-2.54-6.5-3.88-2.94-1.825-5.82-3.73-8.78-5.917l-1.12-.827-1.16-.947-.59-.494-.71-.625c-.47-.424-.8-.776-1.2-1.18-1.41-1.491-2.54-2.893-3.65-4.304-4.36-5.645-8.08-11.32-11.77-17.085-3.69-5.766-7.12-11.673-10.45-17.62l6.13-4.234 12.84 15.544c4.26 5.13 8.56 10.321 12.91 14.989 1.07 1.149 2.18 2.278 3.17 3.144.22.172.49.424.66.535l.26.181.42.262.88.545 1 .584c2.64 1.542 5.55 3.024 8.44 4.597 4.48 2.369 9.06 4.717 13.56 7.146 1.19.646 2.38 1.291 3.55 1.946l.37.222z"
                    ></path>
                    <path
                        fill="#000"
                        d="M240.05 175.392l.24.514-6.66 13.175a184.996 184.996 0 01-11.45-6.048c1.69-7.742 10-9.284 14.32-9.556l3.55 1.915z"
                        opacity="0.2"
                    ></path>
                    <path
                        fill="#FFB573"
                        d="M177.33 132.048s-6.31-3.095-9.43-4.425c-2.84-1.21-6.35-4.032-5.93-5.877 1.64-7.056 10.35-1.34 10.35-1.34l10 5.362c.21 2.127-2.24 5.03-4.99 6.28z"
                    ></path>
                    <path
                        fill="#407BFF"
                        d="M137.34 115.809l-.9-.262-.39 1.351 34 9.908a4.218 4.218 0 003.233-.368 4.281 4.281 0 002.027-2.565 4.31 4.31 0 00-.366-3.258 4.253 4.253 0 00-2.544-2.044l-34-9.899-.34 1.17.9.262-1.62 5.705z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M137.1 115.739l1.64-5.706 31.19 9.072a2.913 2.913 0 011.721 1.419 2.933 2.933 0 01.219 2.23 3.017 3.017 0 01-1.38 1.784 2.803 2.803 0 01-2.19.273l-31.2-9.072z"
                    ></path>
                    <path
                        fill="#D6D6D6"
                        d="M137.52 114.297l.25-.867 30.39 8.85a.456.456 0 01.265.214.45.45 0 01.035.341.45.45 0 01-.55.312l-30.39-8.85zM138.13 112.15l.25-.867 30.39 8.85a.431.431 0 01.271.212.436.436 0 01.039.343.45.45 0 01-.56.312l-30.39-8.85z"
                    ></path>
                    <path
                        fill="#FFB573"
                        d="M182.33 125.768s-5.21-5.816-6.69-6.28c-1.48-.463-9.18.393-8.43 1.432.75 1.038 6.69 2.56 6.69 2.56l2.84 2.308 5.59-.02z"
                    ></path>
                    <path
                        fill="#407BFF"
                        d="M277.19 181.349l-1.07-.463c-1.73-.716-3.46-1.492-5.18-2.248l-1.5-.666-2.05-.897-5.88 12.621-.07.151c4.62 2.258 9.23 4.304 14 6.159l1.74.665c.53.212 1.07.403 1.61.605l1.17.423c2.64 1.008 5.33 1.845 8.12 2.651h.06l.23.061-11.18-19.062zm.52-13.033c.11.181.22.363.34.544.103.009.207.009.31 0 1.48.948 5.26-2.54 5.48-4.838-.46-.494-.92-1.008-1.39-1.472-.16-.171-.32-.353-.49-.524l-3.89 3.024-1.57 1.24c.017.04.041.078.07.111l1.14 1.915z"
                    ></path>
                    <path
                        fill="#407BFF"
                        d="M307.84 195.794v.706l-.05.372c-.03.191-.07.379-.12.565-.05.181-.11.373-.17.544-.06.172-.14.373-.27.666a6.547 6.547 0 01-1 1.461 6.577 6.577 0 01-1.57 1.29 6.683 6.683 0 01-1.62.656l-.52.121-.35.06c-1.322.219-2.666.27-4 .151-1.1-.08-2.09-.222-3-.383-1.9-.322-3.65-.736-5.35-1.179-.47-.131-.93-.252-1.39-.393l-11.15-19.082c2.57 1.119 5.13 2.218 7.69 3.276 1.4.575 2.8 1.139 4.19 1.674l-2.16-3.317a1280.164 1280.164 0 01-8.91-14.112c.103.009.207.009.31 0 1.48.948 5.26-2.54 5.48-4.838 3.893 4.153 7.677 8.4 11.35 12.741 2.15 2.51 4.25 5.04 6.33 7.711a90.897 90.897 0 013.09 4.103c.52.725 1 1.461 1.58 2.338.333.533.633 1.085.9 1.653.1.202.19.414.31.726.182.502.309 1.023.38 1.552.031.312.038.625.02.938z"
                    ></path>
                    <path
                        fill="#000"
                        d="M288.85 201.308l-.1-.121-.7-.837-12.47-14.999-3.31-3.982-2.83-3.397 1.5.666c1.72.756 3.45 1.532 5.18 2.248l1.07.463 11.15 19.082.51.877z"
                        opacity="0.2"
                    ></path>
                    <path
                        fill="#FFB573"
                        d="M283.84 164.072c-.22 2.298-4 5.786-5.48 4.839a1.783 1.783 0 01-.31 0 2.781 2.781 0 01-.65-.182 6.547 6.547 0 01-1.3-.655 8.099 8.099 0 01-3-3.105 1.529 1.529 0 01-.13-.373c-.3-1.471-.45-3.124-.75-4.415a.582.582 0 01.19-.635 1.164 1.164 0 011.09 0c.207.079.4.191.57.333a.13.13 0 01.07.06.64.64 0 01.17.162c.331.323.57.73.69 1.179.44 2.228 3.92 1.764 3.92 1.764l1.42-4.103.49-1.431.91-2.641a.47.47 0 01.07.071c0 .07.07.141.1.201.56 1.321 1.51 6.905 1.87 8.236.071.224.092.462.06.695z"
                    ></path>
                    <path
                        fill="#263238"
                        d="M282.3 162.842l-5 5.998a.491.491 0 01-.498.218.486.486 0 01-.392-.379l-5.77-13.447a1.532 1.532 0 01.19-1.452l5-6.048c.3-.352.7-.272.89.172l5.75 13.416a1.532 1.532 0 01-.17 1.522z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M281.05 161.582l-4.05 4.879c-.16.182-.36.141-.46-.091l-5.05-11.793a.794.794 0 01.1-.746l4.1-4.879c.15-.181.36-.141.46.091l5 11.783c.049.124.066.259.049.392a.78.78 0 01-.149.364z"
                        opacity="0.3"
                    ></path>
                    <path
                        fill="#FFB573"
                        d="M281.84 154.98a3.068 3.068 0 00-.971-1.368 3.038 3.038 0 00-1.539-.648c-.84 0-1.17 3.76-.93 4.647.49 1.834 1.8-1.583 1.8-1.583l.73 1.684c.76-.857 1.49-1.633.91-2.732z"
                    ></path>
                    <path
                        fill="#FFB573"
                        d="M280.48 151.613a3.612 3.612 0 00-2.25-1.421c-.84 0-1.24 3.538-1 4.415.49 1.835 1.88-1.351 1.88-1.351l1.76 1.926c.76-.867.42-2.077-.39-3.569z"
                    ></path>
                    <path
                        fill="#FFB573"
                        d="M279.11 149.829c-.11-.302-.79-1.784-1.63-1.764-.84.02-1.53 2.792-1.29 3.679.49 1.835 1.88-1.35 1.88-1.35l1.76 1.925c.3-.484.09-.998-.72-2.49z"
                    ></path>
                    <path
                        fill="#407BFF"
                        d="M336.8 227.899l-2.14 6.763a1427.629 1427.629 0 01-20.8-5.392c-3.46-.938-6.92-1.885-10.4-2.883-3.48-.998-6.92-2.016-10.56-3.276-.48-.182-.92-.333-1.42-.535l-.75-.302-.85-.393a12.287 12.287 0 01-2.33-1.452l-.8-.655c-.21-.191-.43-.373-.64-.574-1.56-1.492-2.75-2.863-4-4.254l-1.41-1.593-1.1-1.28c-1.34-1.552-2.65-3.105-4-4.657l-.6-.776c-4.63-5.554-9.14-11.088-13.62-16.803l11.9-9.203c4.21 5.685 8.48 11.42 12.77 17.035 2.15 2.802 4.31 5.594 6.49 8.255 1.07 1.321 2.21 2.651 3.15 3.72.11.111.2.242.31.373l.42.474.46.262c.3.181.68.373 1 .554 2.93 1.492 6.19 2.943 9.4 4.355 3.21 1.411 6.49 2.802 9.77 4.183 6.54 2.731 13.15 5.423 19.75 8.054z"
                    ></path>
                    <path
                        fill="#000"
                        d="M280.69 213.353l-1.1-1.28c-1.34-1.552-2.65-3.105-4-4.657l-.4-20.553c.22.605 1.68 7.167 4 11.28 3.2 5.634 3.72 12.116 1.5 15.21z"
                        opacity="0.2"
                    ></path>
                    <path
                        fill="#FFB573"
                        d="M334.66 234.662c3.917.604 7.862 1.008 11.82 1.21 3.33 0 10.27-3.649 9.45-4.909-.82-1.26-9.49-2.691-9.49-2.691l-11.11-1.008c-1.33 1.673-2.28 4.878-.67 7.398z"
                    ></path>
                    <path
                        fill="#263238"
                        d="M362.477 230.45l-22.553-.544-.054 2.257 22.554.544.053-2.257z"
                    ></path>
                    <path
                        fill="#263238"
                        d="M361.082 229.038l32.5.655-.024 1.179a7.08 7.08 0 01-2.149 4.948 6.968 6.968 0 01-4.991 1.967l-18.5-.373a6.975 6.975 0 01-4.909-2.166 7.093 7.093 0 01-1.951-5.031l.024-1.179z"
                    ></path>
                    <path
                        fill="#407BFF"
                        d="M374.73 228.614s-7.17-5.796-1.5-11.088c5.67-5.292 5.83-9.404 1.5-13.436 0 0 6.5 3.024 8.83 9.223 2.33 6.199-9 11.058-8.83 15.301z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M374.73 228.614s-7.17-5.796-1.5-11.088c5.67-5.292 5.83-9.404 1.5-13.436 0 0 6.5 3.024 8.83 9.223 2.33 6.199-9 11.058-8.83 15.301z"
                        opacity="0.8"
                    ></path>
                    <path
                        fill="#FFB573"
                        d="M335.33 227.294s7.39-2.016 8.87-1.562c1.48.453 7.36 5.292 6.19 5.745-1.17.454-6.88-1.512-6.88-1.512l-3.58.373-4.6-3.044zM269.26 437.28l2.41 11.603h6.06l.66-11.603h-9.13z"
                    ></path>
                    <path
                        fill="#407BFF"
                        d="M295.05 457.098c-.2-3.79-1.81-4.919-3.84-5.04-2.03-.121-9.58-2.692-9.58-2.692s-1.49-2.399-2.87-2.882c-1.38-.484-2.76.937-2.76.937l-3.79-.464s-1.08-1.733-1.92-.221c-1.29 2.348-1.36 8.84-1.3 10.362h26.06z"
                    ></path>
                    <path
                        fill="#000"
                        d="M294.59 456.11h-4.72l-20.67-.101c-.26 0-.2-.413.06-.403h1.4v-.061a3.802 3.802 0 00.598-3.022 3.798 3.798 0 00-1.828-2.471c-.21-.121.06-.474.26-.343a4.13 4.13 0 011.959 2.649 4.151 4.151 0 01-.599 3.248H274l20.66.111c.26-.01.19.393-.07.393z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M280.44 451.009c1.12-1.28 2.7-1.643 3.81-.675.18.151.44-.201.26-.353-1.28-1.098-3.12-.625-4.38.817-.19.211.12.413.31.211z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M282.55 451.685c1.12-1.28 2.7-1.633 3.81-.676.18.152.44-.191.27-.352-1.28-1.099-3.12-.615-4.39.826-.18.212.13.413.31.202z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M284.74 452.36c1.12-1.27 2.7-1.633 3.81-.675.18.151.44-.192.26-.343-1.27-1.109-3.12-.625-4.38.817-.19.211.12.413.31.201z"
                    ></path>
                    <path
                        fill="#FFB573"
                        d="M205.81 426.747l-3.63 11.693 5.89 2.963 5.71-10.171-7.97-4.485z"
                    ></path>
                    <path
                        fill="#407BFF"
                        d="M219.24 457.098c1.65-3.407.79-5.181-.92-6.29s-7.06-7.056-7.06-7.056-.15-2.823-1.11-3.931c-.96-1.109-2.88-.535-2.88-.535l-3.87-2.499s0-2.52-1.22-1.129c-1.74 2.016-4.39 7.529-5.07 8.89l22.13 12.55z"
                    ></path>
                    <path
                        fill="#000"
                        d="M219.56 455.707l-4.07-2.248-17.77-9.798c-.23-.121 0-.464.24-.343l1.2.666h.05a4.105 4.105 0 001.998-4.115 4.107 4.107 0 00-.528-1.52c-.13-.212.26-.413.38-.202a4.488 4.488 0 01.457 3.342 4.45 4.45 0 01-1.997 2.706l2.48 1.341 17.77 9.798c.23.151.01.494-.21.373z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M209.42 444.599c1.59-.565 3.15-.101 3.66 1.28.08.221.47.05.39-.172-.58-1.592-2.42-2.076-4.22-1.441-.27.091-.09.423.17.333z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M210.94 446.232c1.59-.565 3.15-.101 3.65 1.28.09.221.48.05.4-.172-.58-1.592-2.42-2.076-4.22-1.441-.27.091-.09.423.17.333z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M212.52 447.895c1.59-.565 3.15-.101 3.66 1.28.08.222.47.05.39-.171-.58-1.593-2.42-2.077-4.22-1.442-.27.091-.09.423.17.333z"
                    ></path>
                    <path
                        fill="#263238"
                        d="M249.28 285.264c1.263 15.544 3.433 31 6.5 46.287 1.08 5.652 2.327 11.7 3.74 18.144-5.71 37.145 10 90.811 10 90.811l9.36-.212s3.18-59.976 3.13-91.375c-.08-51.408-4.66-100.447-4.66-100.447l-25.46-.101s-4.7 7.661-2.61 36.893z"
                    ></path>
                    <path
                        fill="#000"
                        d="M249.28 285.264c1.263 15.544 3.433 31 6.5 46.287 6-20.573-2.18-64.512-2.18-64.512l-4.32 18.225z"
                        opacity="0.2"
                    ></path>
                    <path
                        fill="#263238"
                        d="M279.83 442.472l.43-4.032h-12.47l.57 4.032h11.47zM224.93 247.363l-.54 102.988c-6.74 7.358-20.87 78.301-20.87 78.301l10.88 5.988s29.73-68.474 33.82-79.048c4.09-10.574 9.78-88.472 9.78-88.472l-6.91-16.894-26.16-2.863z"
                    ></path>
                    <path
                        fill="#263238"
                        d="M215.13 437.079l1.94-3.548-14.41-7.429-1.5 3.77 13.97 7.207z"
                    ></path>
                    <path
                        fill="#407BFF"
                        d="M278.25 252c0 4.687-34.13 6.905-54.44.151.34-1.27.83-3.487 1.12-4.768.15-.594.28-1.209.41-1.844.42-2.016.773-4.251 1.06-6.703v-.333c.52-4.713.797-9.451.83-14.193v-4.133c0-1.743-.08-3.528-.17-5.372a207.868 207.868 0 00-2.95-26.652 11.088 11.088 0 01.156-4.577 11.023 11.023 0 011.992-4.117 10.946 10.946 0 013.482-2.942 10.85 10.85 0 014.37-1.256c1.74-.131 3.57-.212 5.44-.242 1.87-.03 3.67-.06 5.41-.06 4.74-.089 9.48.137 14.19.675l1.08.141c1.77.232 3.56.524 5.3.817 7.51 1.31 10.75 6.552 11 15.624.29 10.08 7.88 16.359-1.72 23.184-1.2 8.527 3.44 23.375 3.44 36.6z"
                    ></path>
                    <path
                        fill="#000"
                        d="M227.28 224.29v-4.133c0-1.744-.08-3.528-.17-5.372l7.89-16.048-7.72 25.553zM236.68 191.046l-10.13 15.382c-.16-1.844-.34-3.729-.57-5.634l10.7-9.748z"
                        opacity="0.2"
                    ></path>
                    <path
                        fill="#FFB573"
                        d="M245 174.938c4.81 8.518 16.12 13.618 16.12 13.618 1.53-3.81 1-9.928-.85-12.801l-1.08-.141c-4.71-.538-9.45-.764-14.19-.676z"
                    ></path>
                    <path
                        fill="#263238"
                        d="M274.17 159.879s5.69-7.873.74-15.312c-4.95-7.439-13-4.344-13-4.344l12.26 19.656z"
                    ></path>
                    <path
                        fill="#FFB573"
                        d="M260.38 178.285c.039.14.1.272.18.393 1.63 2.601-.14 4.98-3 4.768a5.535 5.535 0 01-.81-.111 4.88 4.88 0 01-2.64-1.492 62.655 62.655 0 00-7-6.481c4.23-2.288 5.77-10.403 6.16-15.473l6.57 8.427 1.23 1.834a15.45 15.45 0 00-1.42 3.256 5.262 5.262 0 00.73 4.879z"
                    ></path>
                    <path
                        fill="#000"
                        d="M259.68 173.376c.346-1.137.823-2.23 1.42-3.256l-1.23-1.784-4.13.091a9.804 9.804 0 003.94 4.949z"
                        opacity="0.2"
                    ></path>
                    <path
                        fill="#FFB573"
                        d="M252.1 150.837c-.66 8.336-1.11 11.844 2.36 16.662 5.22 7.248 15.32 6.2 18.39-1.774 2.76-7.187 3.37-19.605-4-24s-16.05.786-16.71 9.072l-.04.04z"
                    ></path>
                    <path
                        fill="#263238"
                        d="M253.92 156.29c-4.15-1.108-2.52-5.423-2.52-5.423l6.11 1.008s.55 5.524-3.59 4.415z"
                    ></path>
                    <path
                        fill="#263238"
                        d="M270.65 142.491s-.11 4.617-5.71 4.858c-5.6.242-5.19 8.891-11.4 7.278-7.67-2.016-4.76-8.588-2.91-11.451 1.17-1.824 13.72-12.741 20.02-.685z"
                    ></path>
                    <path
                        fill="#263238"
                        d="M262.19 139.104s.12-10.332-8.85-11.652c-8.25-1.22-11.42 6.511-11.13 16.027.36 11.491-8 8.497-8 8.497a10.617 10.617 0 003.633 4.397 10.49 10.49 0 005.367 1.863c15.26 1.441 18.98-19.132 18.98-19.132z"
                    ></path>
                    <path
                        fill="#407BFF"
                        d="M251.57 142.047a.223.223 0 01-.14 0 .248.248 0 01-.108-.156.264.264 0 010-.097.26.26 0 01.038-.089 12.462 12.462 0 014.662-3.902 12.354 12.354 0 015.938-1.219.253.253 0 01.24.262.23.23 0 01-.074.183.219.219 0 01-.086.05.24.24 0 01-.1.009 11.84 11.84 0 00-5.689 1.159 11.944 11.944 0 00-4.471 3.73.254.254 0 01-.21.07z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M269.4 163.679s-4-1.835-4.91-3.599c0 0-.59 3.166 1.52 4.325a2.522 2.522 0 001.837.31 2.537 2.537 0 001.553-1.036z"
                    ></path>
                    <path
                        fill="#263238"
                        d="M265.7 154.557c-.09.675.19 1.27.62 1.33.43.061.87-.433 1-1.109.13-.675-.18-1.27-.62-1.33-.44-.061-.86.433-1 1.109zM272.48 155.665c-.09.676.19 1.271.62 1.331.43.06.87-.433 1-1.099.13-.665-.18-1.27-.62-1.33-.44-.061-.86.433-1 1.098z"
                    ></path>
                    <path
                        fill="#263238"
                        d="M273.25 154.577l1.66-.242s-1 1.149-1.66.242z"
                    ></path>
                    <path
                        fill="#ED893E"
                        d="M270 155.534s.91 1.946 1.94 3.67a1.011 1.011 0 01-.15 1.268.992.992 0 01-.39.233c-.706.217-1.434.355-2.17.414l.77-5.585z"
                    ></path>
                    <path
                        fill="#FFB573"
                        d="M248.39 156.149a5.402 5.402 0 001.051 1.993 5.335 5.335 0 001.769 1.384c1.75.766 2.94-1.119 2.71-3.236-.2-1.905-1.36-4.596-3.24-4.455-1.88.141-2.88 2.389-2.29 4.314z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M252.76 158.327a1.137 1.137 0 01-.691 1.043 1.12 1.12 0 01-1.527-.823 1.136 1.136 0 01.476-1.159 1.114 1.114 0 011.414.14c.21.212.328.499.328.799z"
                    ></path>
                    <path
                        fill="#263238"
                        d="M263.88 151.865a.37.37 0 00.28-.121 3.1 3.1 0 012.67-1.008.406.406 0 00.46-.322.4.4 0 00-.32-.464 3.872 3.872 0 00-1.846.222 3.903 3.903 0 00-1.534 1.058.407.407 0 000 .565.432.432 0 00.28.111l.01-.041zM275.6 153.075a.396.396 0 00.374-.214.408.408 0 00-.034-.431 3.897 3.897 0 00-3.27-1.553.403.403 0 00-.36.434.412.412 0 00.44.363 3.1 3.1 0 012.57 1.25.404.404 0 00.28.151zM266.47 153.458l1.66-.232s-1 1.139-1.66.232z"
                    ></path>
                    <path
                        fill="#407BFF"
                        d="M240 187.044c-2.86 7.137-6 14.032-9.37 20.916a248.802 248.802 0 01-5.3 10.262c-1.86 3.407-3.81 6.764-6.13 10.251l-.92 1.321c-.31.433-.65.897-1 1.361-.35.463-.78 1.008-1.21 1.441-.18.232-.52.554-.78.827l-.42.413-.27.242a209.315 209.315 0 00-4.12 3.649l-8.39 7.479c-5.62 5.04-11.31 9.949-17.18 14.717l-4.9-4.758c4.53-6.108 9.26-11.995 14.11-17.811 2.43-2.903 4.88-5.786 7.4-8.649 1.27-1.431 2.53-2.853 3.88-4.304.08-.091.19-.202.23-.262l.06-.091c.057-.074.111-.152.16-.232.17-.242.32-.453.53-.786.21-.333.39-.595.59-.947.2-.353.41-.686.62-1.008 1.67-2.914 3.24-6.25 4.83-9.526 1.59-3.276 3.1-6.683 4.64-10.08 3-6.764 6.08-13.638 9.17-20.362l13.77 5.937z"
                    ></path>
                    <path
                        fill="#FFB573"
                        d="M181 253.784s6 2.903 3.85 6.159-6.85 4.738-8.54 7.419c-1.69 2.681-5.07 9.707-5.82 9.657-.75-.051 1.54-10.463 2.32-12.278.78-1.814 4.38-6.048 4.38-6.048l3.81-4.909z"
                    ></path>
                    <path
                        fill="#FFB573"
                        d="M172.3 266.172s-2.3 3.387-2.43 4.889a29.862 29.862 0 01-1.12 5.937c-.44.887 1.6.273 2.31-2.62.557-2.711.971-5.45 1.24-8.206zM184.44 258.512a9.57 9.57 0 01-1.48 4.032 29.675 29.675 0 00-3.1 5.917c-.64 1.754-2.35 2.389-2.82 1.612-.47-.776 1.15-3.941 1.75-6.541.6-2.601 5.65-5.02 5.65-5.02z"
                    ></path>
                    </svg>
                </div>
                <div className="w-full flex flex-col justify-center">
                    <h1 className='text-2xl sm:text-5xl md:text-7xl font-bold'>GET STUFF <span className='gradient-text'>DONE.</span></h1>
                    <p className='opacity-70 mt-4 text-justify text-lg font-light'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero!
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default LandingPage