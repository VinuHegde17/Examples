import React from 'react'

(function One(){
    console.log('First function on IIFE');
})();
(function Two(val){
    console.log(`Second function on IIFE ${val}`);
})(2);
function Iife() {
  return (
    <div>
      IIFE
    </div>
  )
}

export default Iife
