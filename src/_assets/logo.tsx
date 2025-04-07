import React from 'react';

export default function Logo({
  width = 235,
  height = 40,
  color = '#222222',
}: {
  width?: number;
  height?: number;
  color?: string;
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 235 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M90.5694 19.8289C90.5694 20.6344 90.6704 21.4198 90.8726 22.185C91.0748 22.9502 91.3881 23.6349 91.8126 24.2391C92.2574 24.8432 92.8234 25.3365 93.5108 25.7192C94.2183 26.0816 95.0573 26.2629 96.0276 26.2629C97.281 26.2629 98.2918 25.991 99.06 25.4473C99.8484 24.9036 100.354 24.1283 100.576 23.1214H105.337C105.236 24.3901 104.913 25.5077 104.367 26.4743C103.821 27.4208 103.123 28.2162 102.274 28.8606C101.425 29.505 100.455 29.9883 99.3633 30.3105C98.2716 30.6327 97.1395 30.7938 95.967 30.7938C94.2891 30.7938 92.8032 30.532 91.5094 30.0085C90.2156 29.4849 89.1138 28.7499 88.2041 27.8034C87.3146 26.8368 86.6374 25.689 86.1724 24.3599C85.7075 23.0107 85.475 21.5104 85.475 19.8591C85.475 18.2481 85.7176 16.7781 86.2027 15.449C86.6879 14.0998 87.3753 12.9419 88.2648 11.9753C89.1745 11.0087 90.2762 10.2636 91.57 9.73999C92.8841 9.19627 94.3839 9.14024 96.0213 9.14024C96.1767 9.14024 96.3304 9.13934 96.4825 9.13845C96.7819 9.1367 97.075 9.13499 97.3627 9.14024H117.941H118.013H137.086C137.132 9.14024 137.172 9.16228 137.197 9.19627H137.199L146.812 22.4267V9.19627H151.755V9.21219H156.248V9.19627H160.979L170.591 22.4267V9.19627H175.534V9.20403H180.027V9.19627H195.796V9.20403H207.301C207.682 9.19627 208.071 9.19627 208.468 9.19627C208.72 9.19627 208.966 9.19152 209.208 9.18684C209.721 9.17696 210.214 9.16744 210.694 9.20403H216.944V9.19627H234.987V9.20403H235.002V13.7714H228.437V30.5824H223.494V13.7714H208.705L208.474 13.7714L208.453 13.7714H206.755C206.467 13.8024 206.199 13.8685 205.951 13.9991C205.264 14.3414 204.698 14.8147 204.253 15.4188C203.829 16.0028 203.515 16.6774 203.313 17.4426C203.111 18.2078 203.01 19.0033 203.01 19.8289C203.01 20.6344 203.111 21.4198 203.313 22.185C203.515 22.9502 203.829 23.6349 204.253 24.2391C204.698 24.8432 205.264 25.3365 205.951 25.7192C206.659 26.0816 207.498 26.2629 208.468 26.2629C209.722 26.2629 210.732 25.991 211.501 25.4473C212.289 24.9036 212.794 24.1283 213.017 23.1214H217.778C217.677 24.3901 217.353 25.5077 216.807 26.4743C216.261 27.4208 215.564 28.2162 214.715 28.8606C213.866 29.505 212.896 29.9883 211.804 30.3105C210.712 30.6327 209.58 30.7938 208.408 30.7938C206.73 30.7938 205.244 30.532 203.95 30.0085C202.656 29.4849 201.554 28.7499 200.645 27.8034C199.755 26.8368 199.078 25.689 198.613 24.3599C198.148 23.0107 197.916 21.5104 197.916 19.8591C197.916 18.2481 198.158 16.7781 198.643 15.449C198.858 14.8524 199.112 14.2932 199.406 13.7714H184.97V17.8051H194.158V22.185H184.97V26.1421H195.796V30.5824H180.027V13.7714H175.534V30.5824H170.895L161.191 17.4426V30.5824H156.248V13.6007H151.755V30.5824H147.115L137.412 17.4426V30.5824H132.469V13.5287H127.506C127.856 14.0835 128.153 14.6833 128.399 15.3282C128.904 16.6573 129.157 18.1374 129.157 19.7685C129.157 21.3795 128.904 22.8596 128.399 24.2088C127.893 25.5581 127.166 26.726 126.215 27.7128C125.285 28.6995 124.153 29.4648 122.819 30.0085C121.485 30.5522 119.989 30.814 118.331 30.7938C116.653 30.7938 115.147 30.532 113.813 30.0085C112.499 29.4648 111.377 28.7096 110.447 27.743C109.517 26.7764 108.799 25.6285 108.294 24.2995C107.809 22.9502 107.566 21.4701 107.566 19.8591C107.566 18.228 107.819 16.7479 108.324 15.4188C108.59 14.7375 108.907 14.1049 109.275 13.5212H104.251C104.252 13.5237 104.253 13.5262 104.255 13.5287H98.9463H96.2019C95.2113 13.5287 94.1981 13.6366 93.5108 13.9991C92.8234 14.3414 92.2574 14.8147 91.8126 15.4188C91.3881 16.0028 91.0748 16.6774 90.8726 17.4426C90.6704 18.2078 90.5694 19.0033 90.5694 19.8289ZM55.3242 30.5824H60.267V9.19627H55.3242V30.5824ZM62.649 9.19627V13.697H69.1989V30.5824H74.1417V13.697H80.6916V9.19627H62.649ZM112.964 22.2152C112.742 21.45 112.63 20.6546 112.63 19.8289C112.63 19.0234 112.742 18.238 112.964 17.4728C113.207 16.7076 113.56 16.033 114.025 15.449C114.49 14.8449 115.087 14.3616 115.814 13.9991C116.542 13.6366 117.401 13.4554 118.392 13.4554C119.403 13.4554 120.262 13.6467 120.969 14.0293C121.697 14.4119 122.294 14.9053 122.758 15.5094C123.223 16.1135 123.557 16.7982 123.759 17.5634C123.982 18.3287 124.093 19.104 124.093 19.8893C124.093 20.6747 123.982 21.45 123.759 22.2152C123.537 22.9805 123.193 23.6651 122.728 24.2693C122.263 24.8734 121.677 25.3567 120.969 25.7192C120.262 26.0816 119.423 26.2629 118.453 26.2629C117.442 26.2427 116.572 26.0514 115.845 25.689C115.117 25.3265 114.51 24.8532 114.025 24.2693C113.56 23.6651 113.207 22.9805 112.964 22.2152Z"
        fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd"
        d="M23.424 14.97C24.2456 14.97 25.1272 15.8084 25.1272 16.6866V38.8492C25.1272 39.4847 24.61 40 23.9719 40C20.8239 40 17.4276 39.7543 14.387 38.9421C10.8003 37.984 7.95677 36.0697 5.73077 33.8523C3.50476 31.6349 1.82342 28.962 0.961806 26.008C0.0834936 22.9966 -3.1275e-07 19.2567 0 16.1208C6.33887e-08 15.4853 0.517234 14.97 1.15527 14.97L23.424 14.97Z"
        fill="#00D6E6"/>
      <path fillRule="evenodd" clipRule="evenodd"
        d="M16.8107 25.0299C15.8088 25.0299 15.0273 24.1717 15.0273 23.2535L15.0273 1.1508C15.0273 0.515232 15.5446 -8.33449e-08 16.1826 0C19.3307 4.11217e-07 22.7269 0.245681 25.7675 1.05789C29.3543 2.01597 32.1978 3.93032 34.4238 6.14771C36.6498 8.36509 38.3311 11.0379 39.1927 13.992C40.0711 17.0033 40.1546 20.7433 40.1546 23.8791C40.1546 24.5147 39.6373 25.0299 38.9993 25.0299H16.8107Z"
        fill="#7030A0"/>
      <path
        d="M15.0273 14.97H23.3229C24.3189 14.97 25.1263 15.7743 25.1263 16.7664V25.0299H16.8307C15.8347 25.0299 15.0273 24.2256 15.0273 23.2335V14.97Z"
        fill="url(#paint0_linear_871_77)"/>
      <defs>
        <linearGradient id="paint0_linear_871_77" x1="25.1263" y1="14.97" x2="15.4265" y2="25.4011"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D6E6"/>
          <stop offset="1" stopColor="#9311F5"/>
        </linearGradient>
      </defs>
    </svg>

  );
}
