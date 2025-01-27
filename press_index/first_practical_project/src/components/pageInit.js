export default function pageInit(){
    // console.log('pageInit');

    // after page loaded and DOM ready, it will execute
    $(function(){
        $('.loading-block').addClass('loading-block-moveup')
        const eles = $('.init-Ref')
        setTimeout(()=>{
            // 交叉观察器 异步执行 一直监听元素是否出现
            const io = new IntersectionObserver((entries)=>{
                // console.log(entries)
                // entries 是一个数组，包含所有被观察元素的IntersectionObserverEntry对象
                entries.forEach((entry)=>{
                    if(entry.isIntersecting){
                        // console.log(entry)
                        // console.log(entry.target)
                        $(entry.target).addClass('animate__animated animate__fadeIn')
                    }
                })
            })
            // 监听元素
            eles.each((idex, dom)=>{
                // console.log(dom)
                io.observe(dom)
            })
        }, 2200)
    })
}