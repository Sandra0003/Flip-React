import React from 'react'

const Suggestions = () => {
  return (
    <div className='sugestion-div'>
        <div class="suggestion-sub">
            <a href="" className='suggetion-head-a'>
                <div class="sugg-head">
                    <div class="sug-word-only">Suggested For You</div>
                </div>
                <div class="sugg-arrow">
                    <div class="sugg-arow-sub">
                        <div class="arrow-sub2">
                            <svg width="17" height="17" viewBox="0 0 16 16" fill="none"><path d="M1 8H14" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 3.5L14.5 8L10 12.5" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                    </div>
                </div>
            </a>
            <div class="sug-img-div">
                <div class="sug-img-one">
                    <a href="" className='sugg-img-main'>
                        <div class="sugg-img-only">
                            <img src="https://rukminim1.flixcart.com/image/130/170/xif0q/mobile/i/b/d/-original-imahfz2tuqdczpfg.jpeg?q=90" alt="Image" className="sug-img-main" aria-busy="false" data-highres-loaded="false" loading="lazy" srcset="https://rukminim1.flixcart.com/image/130/170/xif0q/mobile/i/b/d/-original-imahfz2tuqdczpfg.jpeg?q=80 1x, https://rukminim1.flixcart.com/image/260/340/xif0q/mobile/i/b/d/-original-imahfz2tuqdczpfg.jpeg?q=60 2x, " fetchpriority="auto" ></img>
                         <div class="rating-sug">
                            <div class="sugg-rating-main-div">
                                <div class="rating-only-sugg">4.6</div>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="#0E772D" ><path d="m12.002 2.588 2.222 6.838h7.19l-5.816 4.227 2.222 6.839-5.818-4.227-5.817 4.227 2.222-6.84L2.59 9.427h7.19z" stroke="#0E772D" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                        </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>



    </div>
  )
}

export default Suggestions
