import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import {faqs} from "../util/usefull-data.js";
import CallToAction from "../components/shared/CallToAction.jsx";
import {styles} from "../util/genral-style.js";
import React from 'react';

const Terms = () => {
  return (
    <div className={`bgOne generalNavPadding ${styles.paddingX}`}>
      <h1 className=' text-xl font-bold pb-3'>Terms and Conditions</h1>
      <p className='pb-3'>Lorem ipsum dolor sit amet consectetur. Morbi pellentesque mattis nunc eget hendrerit scelerisque interdum. Eleifend mauris augue sed lorem libero netus netus consequat lacus. Orci felis dictum id magna sit risus nunc. Ac ultrices congue morbi id eu eget faucibus adipiscing facilisi. Pellentesque pellentesque egestas blandit id vulputate vel pharetra sed. Tortor auctor mi egestas aliquet nulla gravida turpis ac donec. Faucibus nec pharetra ut risus purus cras feugiat. Eu vitae netus eu interdum. Malesuada egestas aliquam sapien ut hendrerit cras tellus et. Velit sed ac eget turpis ligula morbi vel elit. 

At sed ut consequat aliquet. Aliquet sem vitae sed imperdiet. Suspendisse eget scelerisque eget metus sagittis. Vestibulum ornare faucibus gravida eros in molestie aliquam ullamcorper magna. Quisque maecenas quam facilisi condimentum ultrices odio aliquam sapien. Natoque praesent pharetra quam ultrices. Purus maecenas adipiscing est ultrices quam sed est pellentesque diam. A dignissim cursus justo nisi non mauris sed. Nascetur interdum massa non elementum nisl. Eget integer quam orci interdum dapibus tempus. 

Amet faucibus lacus eget semper fringilla quisque. Dolor at dictumst varius sit. Euismod mauris neque risus quam. Sit mauris eget blandit risus porttitor in pellentesque. Massa pharetra at enim dolor et. Nibh consequat pellentesque pretium ac auctor vulputate congue laoreet massa. Enim lacus massa adipiscing arcu nibh nulla. Rhoncus bibendum ornare sagittis consequat ullamcorper et pellentesque varius hac. Elementum at volutpat purus leo. Vitae auctor sit vitae at justo egestas.</p>
    </div>
  );
};

export default Terms;