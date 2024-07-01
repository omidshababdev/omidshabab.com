const Footer = () => {
     const year = () => new Date().getFullYear()

     return (
          <div className="flex w-full items-center justify-between gap-x-5 py-[30px]">
               <div className="flex gap-x-[5px] font-light text-slate-600">{year()} / omidshabab.com <span className="hidden sm:block"> - Crafted with care by omidshabab. All Rights Preserved and Protected.</span></div>
          </div>
     );
}

export default Footer;