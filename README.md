# react-ts-boilerplate

A boilerplate to start writing your React ⚛️ application in Typescript (𝖳𝖲) with

- Jest <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path d="M27.089 15.786a2.606 2.606 0 0 0-2.606-2.606a2.633 2.633 0 0 0-.274.014l3.58-10.558H12.576l3.575 10.549c-.052 0-.105-.005-.158-.005a2.606 2.606 0 0 0-.791 5.09a11.383 11.383 0 0 1-2.049 2.579A10.436 10.436 0 0 1 9.5 23.116a3.323 3.323 0 0 1-1.665-4.23c.077-.18.155-.362.229-.544a2.607 2.607 0 1 0-2.09-.4a20.134 20.134 0 0 0-1.889 4.787c-.354 2.135 0 4.4 1.845 5.681c4.3 2.981 8.969-1.848 13.891-3.061c1.784-.44 3.742-.369 5.313-1.279a4.45 4.45 0 0 0 2.179-3.088a4.639 4.639 0 0 0-.831-3.522a2.6 2.6 0 0 0 .606-1.671zM18.6 15.8v-.009a2.6 2.6 0 0 0-1.256-2.23L20.188 7.8l2.85 5.814a2.6 2.6 0 0 0-1.161 2.169v.057L18.6 15.8z" fill="#c63d14"/><path d="M27.726 15.786a3.247 3.247 0 0 0-2.643-3.186L28.677 2H11.689l3.6 10.621a3.241 3.241 0 0 0-1 5.918a10.865 10.865 0 0 1-1.568 1.846a9.827 9.827 0 0 1-3.16 2.03a2.656 2.656 0 0 1-1.134-3.28l.04-.093l.074-.175a3.245 3.245 0 1 0-3.34-.754c-.108.231-.222.465-.339.706a14 14 0 0 0-1.4 3.8c-.465 2.8.285 5.043 2.111 6.308A5.751 5.751 0 0 0 8.934 30c2.132 0 4.289-1.071 6.4-2.119a23.672 23.672 0 0 1 4.642-1.918c.577-.142 1.171-.228 1.8-.319a9.977 9.977 0 0 0 3.68-1.028a5.09 5.09 0 0 0 2.487-3.53a5.255 5.255 0 0 0-.691-3.613a3.223 3.223 0 0 0 .475-1.688zm-1.273 0a1.97 1.97 0 1 1-1.97-1.97a1.972 1.972 0 0 1 1.97 1.97zM26.9 3.273l-3.174 9.36a3.2 3.2 0 0 0-.4.125l-3.135-6.4l-3.145 6.362a3.2 3.2 0 0 0-.419-.114l-3.163-9.333zM15.993 13.816a1.97 1.97 0 1 1-1.97 1.97a1.972 1.972 0 0 1 1.97-1.97zm-8.522.019A1.97 1.97 0 1 1 5.5 15.8a1.972 1.972 0 0 1 1.97-1.97zm19.217 7.034a3.82 3.82 0 0 1-1.871 2.646a8.9 8.9 0 0 1-3.223.869c-.632.091-1.285.185-1.924.343a24.587 24.587 0 0 0-4.9 2.013c-3.164 1.571-5.9 2.928-8.472 1.143c-1.887-1.308-1.8-3.728-1.58-5.054A12.82 12.82 0 0 1 6 19.376l.27-.559a3.215 3.215 0 0 0 .838.21a3.965 3.965 0 0 0 2.1 4.655l.245.126l.259-.092a11.029 11.029 0 0 0 3.875-2.4a12.078 12.078 0 0 0 1.918-2.319a3.241 3.241 0 0 0 2.64-5.627l2.038-4.121l2.059 4.2a3.24 3.24 0 0 0 4.088 5a3.957 3.957 0 0 1 .355 2.422z" fill="#fff"/></svg>
- Eslint <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.14em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 225"><path d="M77.965 80.568l48.57-28.042a3.929 3.929 0 0 1 3.93 0l48.57 28.042A3.932 3.932 0 0 1 181 83.971v56.084c0 1.403-.75 2.7-1.965 3.403l-48.57 28.042a3.929 3.929 0 0 1-3.93 0l-48.57-28.042A3.931 3.931 0 0 1 76 140.055V83.97c.001-1.404.75-2.7 1.965-3.403" fill="#8080F2"/><path d="M254.417 107.417L196.323 6.35C194.213 2.696 190.315 0 186.095 0H69.906c-4.22 0-8.12 2.696-10.23 6.35L1.583 107.194c-2.11 3.655-2.11 8.268 0 11.923l58.093 100.239c2.11 3.654 6.01 5.522 10.23 5.522h116.188c4.22 0 8.119-1.812 10.228-5.467l58.094-100.402c2.112-3.653 2.112-7.938 0-11.592zm-48.105 48.6c0 1.485-.894 2.86-2.182 3.604l-73.999 42.693a4.21 4.21 0 0 1-4.186 0l-74.056-42.693c-1.287-.744-2.188-2.118-2.188-3.605V70.628c0-1.487.888-2.86 2.176-3.604l73.995-42.694a4.202 4.202 0 0 1 4.185 0l74.06 42.694c1.289.744 2.195 2.117 2.195 3.604v85.388z" fill="#4B32C3"/></svg>
- Prettier <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path d="M21.714 8.571h1.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-1.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571z" fill="#56b3b4"/><path data-name="Rectangle" d="M4.571 26.857h5.714a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H4.571a.571.571 0 0 1-.571-.57a.571.571 0 0 1 .571-.572z" fill="#ea5e5e"/><path data-name="Rectangle" d="M18.286 17.714h3.429a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-3.429a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571z" fill="#bf85bf"/><path data-name="Rectangle" d="M11.429 17.714H16a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-4.571a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571z" fill="#ea5e5e"/><path data-name="Rectangle" d="M4.571 17.714h4.572a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H4.571a.571.571 0 0 1-.571-.57a.571.571 0 0 1 .571-.572z" fill="#56b3b4"/><path data-name="Rectangle" d="M4.571 22.286h5.714a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H4.571A.571.571 0 0 1 4 22.857a.571.571 0 0 1 .571-.571z" fill="#bf85bf"/><path data-name="Rectangle" d="M4.571 13.143h5.714a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H4.571A.571.571 0 0 1 4 13.714a.571.571 0 0 1 .571-.571z" fill="#bf85bf"/><path data-name="Rectangle" d="M10.286 6.286h11.428a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H10.286a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571z" fill="#f7ba3e"/><path data-name="Rectangle" d="M4.571 6.286H8a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.572H4.571A.571.571 0 0 1 4 6.857a.571.571 0 0 1 .571-.571z" fill="#ea5e5e"/><path data-name="Rectangle" d="M9.143 24.571h1.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H9.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571z" fill="#f7ba3e"/><path data-name="Rectangle" d="M9.143 10.857h1.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H9.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571z" fill="#56b3b4"/><path data-name="Rectangle" d="M4.571 24.571h2.286a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H4.571a.571.571 0 0 1-.571-.57a.571.571 0 0 1 .571-.572z" fill="#56b3b4"/><path data-name="Rectangle" d="M4.571 10.857h2.286a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.572H4.571A.571.571 0 0 1 4 11.429a.571.571 0 0 1 .571-.572z" fill="#f7ba3e"/><path data-name="Rectangle" d="M19.429 24.571h1.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-1.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571z" fill="#4d616e" opacity=".5"/><path data-name="Rectangle" d="M12.571 24.571h4.571a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-4.571a.571.571 0 0 1-.571-.57a.571.571 0 0 1 .571-.572z" fill="#4d616e" opacity=".5"/><path data-name="Rectangle" d="M22.857 24.571h4.571a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-4.571a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571z" fill="#4d616e" opacity=".5"/><path data-name="Rectangle" d="M13.714 15.429h9.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-9.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571z" fill="#56b3b4"/><path data-name="Rectangle" d="M8 15.429h3.429A.571.571 0 0 1 12 16a.571.571 0 0 1-.571.571H8A.571.571 0 0 1 7.429 16A.571.571 0 0 1 8 15.429z" fill="#f7ba3e"/><path data-name="Rectangle" d="M4.571 15.429h1.143a.571.571 0 0 1 .572.571a.571.571 0 0 1-.571.571H4.571A.571.571 0 0 1 4 16a.571.571 0 0 1 .571-.571z" fill="#ea5e5e"/><path data-name="Rectangle" d="M14.857 8.571h4.571a.571.571 0 0 1 .572.572a.571.571 0 0 1-.571.571h-4.572a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.572z" fill="#bf85bf"/><path data-name="Rectangle" d="M4.571 8.571h8a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-8A.571.571 0 0 1 4 9.143a.571.571 0 0 1 .571-.572z" fill="#56b3b4"/><path data-name="Rectangle" d="M8 20h10.286a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H8a.571.571 0 0 1-.571-.571A.571.571 0 0 1 8 20z" fill="#f7ba3e"/><path data-name="Rectangle" d="M4.571 20h1.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H4.571A.571.571 0 0 1 4 20.571A.571.571 0 0 1 4.571 20z" fill="#bf85bf"/><path data-name="Rectangle" d="M18.286 10.857H24a.571.571 0 0 1 .571.571A.571.571 0 0 1 24 12h-5.714a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.572z" fill="#ea5e5e"/><path data-name="Rectangle" d="M18.286 13.143H24a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-5.714a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571z" fill="#f7ba3e"/><path data-name="Rectangle" d="M4.571 4h13.715a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H4.571A.571.571 0 0 1 4 4.571A.571.571 0 0 1 4.571 4z" fill="#56b3b4"/><path data-name="Rectangle" d="M20.571 4h6.857a.571.571 0 0 1 .572.571a.571.571 0 0 1-.571.571h-6.858A.571.571 0 0 1 20 4.571A.571.571 0 0 1 20.571 4z" fill="#4d616e" opacity=".5"/><path data-name="Rectangle" d="M20.571 20h2.286a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-2.286a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571z" fill="#4d616e" opacity=".5"/><path data-name="Rectangle" d="M25.143 20h2.286a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-2.286a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571z" fill="#4d616e" opacity=".5"/><path data-name="Rectangle" d="M24 17.714h3.429a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H24a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571z" fill="#4d616e" opacity=".5"/><path data-name="Rectangle" d="M24 6.286h3.429a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H24a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571z" fill="#4d616e" opacity=".5"/><path data-name="Rectangle" d="M25.143 15.429h2.286A.571.571 0 0 1 28 16a.571.571 0 0 1-.571.571h-2.286a.571.571 0 0 1-.572-.571a.571.571 0 0 1 .572-.571z" fill="#4d616e" opacity=".5"/><path data-name="Rectangle" d="M25.143 8.571h2.286a.571.571 0 0 1 .571.572a.571.571 0 0 1-.571.571h-2.286a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.572z" fill="#4d616e" opacity=".5"/><path data-name="Rectangle" d="M26.286 10.857h1.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-1.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571z" fill="#4d616e" opacity=".5"/><path data-name="Rectangle" d="M26.286 13.143h1.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-1.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571z" fill="#4d616e" opacity=".5"/><path data-name="Rectangle" d="M17.143 22.286h10.286a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H17.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571z" fill="#4d616e" opacity=".5"/><path data-name="Rectangle" d="M12.571 22.286h2.286a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-2.286a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571z" fill="#4d616e" opacity=".5"/><path data-name="Rectangle" d="M21.714 26.857h5.714a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-5.714a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571z" fill="#4d616e" opacity=".5"/><path data-name="Rectangle" d="M12.571 26.857h6.857a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-6.857a.571.571 0 0 1-.571-.57a.571.571 0 0 1 .571-.572z" fill="#4d616e" opacity=".5"/><path data-name="Rectangle" d="M12.571 10.857H16a.571.571 0 0 1 .571.571A.571.571 0 0 1 16 12h-3.429a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.572z" fill="#4d616e" opacity=".5"/><path data-name="Rectangle" d="M12.571 13.143H16a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-3.429a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571z" fill="#4d616e" opacity=".5"/></svg>
- Husky <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="0.96em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 487 512"><path d="M433.564 329.127c-.446 17.167-33.615 29.09-20.112 46.152c29.805 4.185 16.249 23.939 32.578 30.662c-28.865 47.002-75.448 52.873-119.742 23.44c-12.886-7.684-27.396-10.94-39.291-7.736c-6.776 10.84 3.305 12.118 9.732 13.688c31.15 6.201 62.553 54.347 167.968 8.487c14.046-5.912 11.916-23.308 5.834-36.985c11.683-4.978 12.384-17.96 14.106-34.646c11.46-37.616-26.181-34.365-51.073-43.062zm-165.728-81.688c-12.854.288-31.777 12.464-44.28 18.524c17.643 10.378 24.651 22.727 44.28 18.87c19.636-3.856 19.278-16.5 11.553-31.189c-2.423-4.607-6.523-6.317-11.553-6.205zM350.783.014c-23.986 1.1-44.619 65.358-69.083 110.904c-70.332 29.251-87.93-8.677-110.895-2.439C131.69 28.753 73.613-51.179 57.92 43.822c3.47 71.804-25.19 77.72-22.655 180.173c0 0-51.119 102.887-30.263 193.927C19.697 482.073 71.373 506.284 106.082 512c3.592-26.24 44.78-85.41 33.515-99.217c-28.108-34.451-19.29-118.846 51.948-127.569c9.732-70.992 58.03-57.629 53.089-78.164c-15.482-64.332 51.32-34.302 62.531-13.222c20.144 33.427 34.308 66.281 50.774 81.853c20.941 19.805 49.347 30.623 51.01 31.247c-5.968-3.73-57.183-47.055-72.168-81.854c-9.012-20.93-8.106-68.08-8.106-68.08c25.985-4.065 36.469 39.655 64.69 79.32c1.168 2.857.962 5.144 0 7.05c-3.893-2.053-5.246-7.202-9.918-7.82c-4.254 0-7.703 6.036-7.703 13.479s5.614 10.1 13.347 13.58c10.781 18.973 21.986 25.945 32.767 30.699L387.07 191.65c-1.29-63.662 5.444-127.327-31.442-190.99a13.923 13.923 0 0 0-4.845-.646zm.333 20.297c1.927-.033 3.707 1.267 5.282 4.227c19.253 36.195 19.963 121.15 19.831 151.184c-9.143-20.808-22.843-55.803-66.035-66.473c0 0 25.231-88.665 40.922-88.938zM92.392 28.385c8.777-.037 18.752 5.106 30.324 26.207c18.515 33.762 31.801 56.222 38.25 67.847c13.201 23.796-5.78 4.98-11.722 66.035c-1.174 12.056-5.726 17.854-14.65 23.973c-19.315-19.306-32.938-52.81-42.343-92.643c-18.44 27.387 11.933 69.735 12.473 105.95c-20.488 4.683-33.772 3.045-41.352.518c-9.505-4.752-12.637-62.723 4.994-107.725C83.052 81.063 76.071 33.4 82.6 31.323c4.492-1.43 4.525-2.916 9.792-2.938z" fill="#626262"/></svg>
- Ramda <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="0.84em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 306"><path d="M21.971 25.115C35.864 10.021 55.79.372 76.406.06c15.773-.627 31.716 3.773 44.812 12.613c16.935 11.085 29.3 28.817 34.118 48.441c1.032 3.748.744 8.344 3.982 11.073c6.15 1.475 12.574.405 18.79 1.54c15.85 3.8 30.41 12.653 41.168 24.887a33.165 33.165 0 0 1 6.124 9.61c8.109 16.7 9.388 35.515 12.757 53.508c3.12 24.116 7.377 48.063 11.36 72.049c3.63 22.197 7.377 44.642 6.293 67.204c-5.014-1.867-9.349-5.706-11.085-10.837c-2.494-8.134-3.278-16.648-4.31-25.056c-.391-3.552-3.342-6.96-7.155-6.568c-5.536-.092-7.951 6.907-6.28 11.386c2.833 6.672 7.978 11.947 12.77 17.235c2.624 2.794 3.63 6.607 5.719 9.754c2.703 3.238 6.594 5.079 10.406 6.685c-1.358.81-2.467 2.35-4.243 2.115c-5.758.274-11.517-.04-17.275.052c-7.077-.078-14.232.797-21.23-.679c-9.793-24.325-21.035-48.037-31.73-71.983a2105.896 2105.896 0 0 0-16.072-35.933c-6.15-13.227-11.425-26.845-17.954-39.89c-.966-4.57-3.656-8.447-5.418-12.704c-2.703-6.672-5.72-13.24-9.166-19.56c-17.118 31.964-33.505 64.307-50.074 96.544c-13.932 27.747-29.117 54.892-41.9 83.213c-12.992-.092-25.97-.392-38.962-.483c33.674-63.405 66.368-127.32 99.481-191.025c2.899-5.68 6.046-11.255 8.291-17.235c-6.398 1.854-12.221 5.419-18.867 6.49c-13.736 2.794-27.76-.131-40.62-5.12c16.216-14.884 39.34-20.473 60.898-19.402c-1.815-5.81-4.427-11.399-8.2-16.204c4.478-8.134 11.673-14.062 18.658-19.938c-10.119-1.188-18.802 5.615-25.004 12.861c-3.852-2.637-7.926-4.922-12.143-6.894c.692-7.364 3.93-14.01 7.351-20.434c-8.187 1.933-13.03 9.832-15.394 17.353c-5.132-.77-10.328-.849-15.512-.535c-.9-5.81-.94-11.7-.405-17.55c-6.437 3.892-6.241 12.379-6.293 18.986c-4.831 1.763-9.44 4.06-13.854 6.685c-2.611-4.008-4.53-8.383-6.463-12.744c-3.199 5.628-.77 12.248 1.515 17.745a111.57 111.57 0 0 0-7.156 11.947c-3.42-1.723-6.737-3.63-10.093-5.484c.927 4.805 4.061 8.657 8.109 11.23c-1.123 5.026-1.593 10.144-1.632 15.276c-3.421.313-6.855.522-10.29.849c2.808 3.016 6.856 3.72 10.76 4.047c1.005 4.113 2.22 8.187 3.708 12.156c-2.128 2.076-4.27 4.126-6.307 6.294c2.912-.431 5.758-1.136 8.553-2.024c3.603 3.382 8.03 5.615 12.273 8.07c-.209.992-.64 2.976-.848 3.969c1.423-.927 2.833-1.854 4.256-2.782c8.017 2.312 16.752 3.448 24.809.653c4.948-1.553 8.957-5.092 13.84-6.776c-1.828 8.513-8.97 14.937-16.556 18.58c-11.086 5.249-23.986 3.786-35.15-.405c-7.638-2.206-13.788-7.651-18.867-13.553C6.55 110.117 1.132 98.365.166 86.039C-1.296 63.882 6.97 41.397 21.971 25.115zM184.65 146.193c-.796 4.14-.64 8.54.731 12.535c3.63 10.028 14.22 14.69 23.033 19.233c-.653-2.22-1.293-4.44-1.92-6.66c-11.411-1.161-17.861-17.456-8.93-25.382c-1.097-2.56-2.207-5.118-3.304-7.69c-3.695 1.853-8.343 3.603-9.61 7.964zm14.833 6.933c-.927 4.649-.013 10.355 5.157 12c-1.24-4.152-2.154-8.683-5.157-12z" fill="#11100E"/></svg>
- React Router <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.83em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 140"><path d="M78.066 92.588c12.818 0 23.209-10.391 23.209-23.21c0-12.817-10.391-23.208-23.21-23.208c-12.817 0-23.208 10.39-23.208 23.209c0 12.818 10.391 23.209 23.209 23.209zm-54.857 46.417c12.818 0 23.209-10.39 23.209-23.209c0-12.817-10.391-23.208-23.21-23.208C10.392 92.588 0 102.978 0 115.796c0 12.818 10.39 23.21 23.209 23.21zm209.582 0c12.818 0 23.209-10.39 23.209-23.209c0-12.817-10.39-23.208-23.209-23.208c-12.818 0-23.209 10.39-23.209 23.208c0 12.818 10.391 23.21 23.21 23.21z" fill="#000"/><path d="M156.565 70.357c-.742-7.754-1.12-14.208-7.06-18.744c-7.522-5.744-16.044-2.017-26.54-5.806C112.65 43.312 105 34.155 105 23.24C105 10.405 115.578 0 128.626 0c9.665 0 17.974 5.707 21.634 13.883c5.601 10.64 1.96 21.467 8.998 26.921c8.333 6.458 19.568 1.729 32.104 7.848a23.614 23.614 0 0 1 9.84 8.425A22.858 22.858 0 0 1 205 69.718c0 10.915-7.65 20.073-17.964 22.568c-10.497 3.789-19.019.062-26.541 5.806c-8.46 6.46-3.931 17.267-10.826 28.682c-3.913 7.518-11.867 12.663-21.043 12.663c-13.048 0-23.626-10.405-23.626-23.24c0-9.323 5.582-17.364 13.638-21.066c12.536-6.12 23.77-1.39 32.104-7.848c4.807-3.726 5.823-9.473 5.823-16.926z" fill="#D0021B"/></svg>
- Axios 🤙🏽

all setup and ready to use out of the box!

Spend less time on configuring your project 🛠⚙️ and start writing some code 😎

# Getting started

### Prerequisites

- [node](https://nodejs.org/en/), Run ` node --version` in terminal to verify
- npm comes with node

## Installation

### Clone the repository ⬇️

```shell
$ git clone https://github.com/ooanishoo/react-ts-boilerplate
$ cd react-ts-boilerplate
```

### Fork the repository and clone ⚓️

- On GitHub, navigate to the https://github.com/ooanishoo/react-ts-boilerplate repository.
- In the top-right corner of the page, click Fork.

<img width="407" alt="Screen Shot 2021-04-05 at 6 55 25 pm" src="https://user-images.githubusercontent.com/9260574/113556968-9eba1280-9640-11eb-96c6-61a106310b8a.png">

- On GitHub, navigate to your fork of the project and copy the git url. Then clone the repo.
- Example:

```shell
$ git clone https://github.com/YOUR_USERNAME/react-ts-boilerplate
$ cd react-ts-boilerplate
```

### Keep your fork synced 🤝

- If you wish to propose changes to this original repository [react-ts-boilerplate](https://github.com/ooanishoo/react-ts-boilerplate), it's a good practice to regularly sync your fork with the upstream repository.
- You can configure Git to pull changes from the original, or upstream, repository into the local clone of your fork.
- Go to your local forked repo and type `git remote -v` and press Enter. You'll see the current configured remote repository for your fork.

```shell
$ git remote -v
> origin  https://github.com/YOUR_USERNAME/react-ts-boilerplate.git (fetch)
> origin  https://github.com/YOUR_USERNAME/react-ts-boilerplate.git (push)
```

- Type the following command:

```
git remote add upstream https://github.com/ooanishoo/react-ts-boilerplate
```

- To verify the new upstream repository you've specified for your fork, type `git remote -v` again. You should see the URL for your fork as origin, and the URL for the original repository as upstream. It should look like this:

```shell
$ git remote -v
> origin    https://github.com/YOUR_USERNAME/react-ts-boilerplate.git (fetch)
> origin    https://github.com/YOUR_USERNAME/react-ts-boilerplate.git (push)
> upstream  https://github.com/ooanishoo/react-ts-boilerplate.git (fetch)
> upstream  https://github.com/ooanishoo/react-ts-boilerplate.git (push)
```

- Now, your your fork is synced 🎉with the upstream repository [react-ts-boilerplate](https://github.com/ooanishoo/react-ts-boilerplate)

### Run the Application

- Run `npm install` to install package dependencies.
- Run `npm start` to start the app in the development mode.

  - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  - The page will reload if you make edits.
  - You will also see any lint errors in the console.

- Run `npm run build` to build the app for production to the `build` folder.

# Settings

- ### Environment variables
  If you require any environment variables, create a `.env` file in the root folder of the project and set the variable name starting with `REACT_APP_API_YOUR_VARIABLE_NAME`

### Example:

```shell
REACT_APP_API_API_ENDPOINT=https://example.com/api
```

- ### Change the title of the project
  Go to `react-ts-boilerplate/public/index.html` and set the name of your project

```shell
<title>Project Name</title>
```

# Pre-installed Packages

### Eslint

- `eslint`: The core ESLint linting library
- `eslint-plugin-react `
- `@typescript-eslint/parser`: The parser that will allow ESLint to lint TypeScript code
- `@typescript-eslint/eslint-plugin`: A plugin that contains a bunch of ESLint rules that are TypeScript specific
- `eslint-plugin-spellcheck`: eslint plugin to spell check words on identifiers, Strings and comments of javascript files.

### Prettier

- `prettier`: The core prettier library
- `eslint-config-prettier`: Disables ESLint rules that might conflict with prettier
- `eslint-plugin-prettier`: Runs prettier as an ESLint rule

### Ramda

- `ramda`: A practical functional library for JavaScript programmers.
- `@types/ramda`: This package contains type definitions for ramda

## Coming Soon: 👨🏽‍💻

- [Redux Tool Kit](https://redux-toolkit.js.org/) Implementation
- Graphql with [Apollo client](https://www.apollographql.com/docs/react/)

## Found this project useful ? ❤️

- Support by clicking the ⭐️ button on the upper right of this page.
- Feel free to follow me 🙌🏽 if you love these kind of projects.

## MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/ooanishoo/react-ts-boilerplate/blob/main/LICENSE)
