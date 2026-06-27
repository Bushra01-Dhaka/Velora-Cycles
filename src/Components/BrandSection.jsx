const BrandSection = () => {
  return (
    <div className="flex justify-center font-outfits bg-success text-info min-h-screen py-20 px-10 lg:px-20">
      <div>
        <div className="text-center ">
          <h2 className="text-3xl text-primary lg:text-5xl font-bold font-outfit">
            Trusted by Riders Worldwide
          </h2>
          <p className="py-4 lg:text-lg w-full lg:w-[40%] mx-auto">
            We partner with the world's most respected cycling brands to ensure
            exceptional quality, performance, and reliability for every rider.
          </p>
        </div>

        <div className="overflow-hidden whitespace-nowrap py-20">
          <div className="flex w-max animate-marquee items-center gap-8 md:gap-12 lg:gap-16">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAACAgICNjY3v7+/6+vpfX1+6urqvr68EBATn5+d8fHyIiIj09PSYmJjh4eFSUlLQ0NA1NTVvb2+ioqLExMTZ2dljY2N1dXUQEBDJyckcHBySkpKpqalZWVk8PDxCQkJLS0spKSkVFRUmJia1tbXalgFtAAAD00lEQVR4nO3Y25LiIBCAYaJmFI3ns+M46o7v/4oLnumGKHOztVX/d2UlEKADDdEYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwX+j3GjlWXWOqjPKD7rmV9vutrFzxsSjemwV9LgeqVm81TI2wXWRZGzPMq7HwrUzeL//hik/lxY4pH13efOpay27yHX7k9XdrTDOvhn8nOUGZu3mlLvYfHW4tdZ3JOD1JW/XNWXnBzYU/Gd11KtfK9v3ia/eyTvLi9NHhr0idTnp8xszyuvvp5khejcKHNzKtUhqu+Ehe3Ny6u/jWUW+U6eE5/VagX4nqVVjAzZaVbD64r0L84xoZh5dscRLNPnHd7aph+566G2WjkE8qdskMk3AUIVL1S9n6NLwvbzfdtZ6Me30f1LxqXK7P12ro63nm+GS0i29VQuXecJEv5O1hJCi9+k6oxHtOx91dcO0cs0Hu+Hy0QzNVQubedXg7zCm2mLhr8/qgSCpI/hnqxboRrlr5A1RzTO0yKvc2w/thorXnEMn0fjRlkisuU4F/U2OfYcKp/l0fpwQZ7ZEqoTJJuFC3csW1Irub2oKCwRi12rqlnFr2xQ6RthTPaasSE1FiP/zq3M1GMtA7V6WTHpDSiuxGI51bi6p+h0hSU1A9RzU2k3nBBj/9TNq/P0AfkMiJTZ9ipsb8aowy2lNVQh1Ouj4syWk3iAWlxil+YivlicG6DeRXIzyIB21UiR8xGr9QI4ecg7M/NBYupZiBvLn8SNmVfjcS8Voafa61NpLl3yCjvVYl5Hbpg35O5EGvbPDy5e72Ud+JnShenPd0NW7fdP5blNGuVAmZ064LdSrat7dTiInsbvWnEP0lcLmuthD7YleNOopHLGSBUgZyeb2hT9b304ZaufWhV7vRLVZ7MU9sZLN+RUZ7okqow8nm2l2VTex9v5KpUZ8DA+rEdntTOgMVtpU5URtirulDn8zaNjl2e09T6qXMkp8VJvKpfLw2UOoc4I6EmStRPkFNAhXG+0It3Ye/SgWLS4R3dWeYZz6xiTlt/X8KN5FP2VHWtjgXPTmoEupw8rxQ5VerPR9Q/Ojf/Y/G53+1oB+HwlJv/DayY9eQC0Yf/OThJFioKgsVxWf/HOL++r232IrsRvugAz+6kjj411Fpui9LqDUSLlS1LbgQXJ7RfeufnVEkysVXfQ+K2PddyqJqBnTNjShRPX+euXc1PrWF03Ual6fmS5VPmlt5UXwBzitVr/Gbj0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPDv/AWkfinRJF87+gAAAABJRU5ErkJggg==" className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 object-contain flex-shrink-0" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPuUXDAsV6B-fxCh2wvz0o_42s9JwVyxx6hQ&s"  className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 object-contain flex-shrink-0" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/SCOTT_LOGO_WHITE.jpg/1280px-SCOTT_LOGO_WHITE.jpg" className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 object-contain flex-shrink-0" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi3_4gwNrxUe2rDZOGHaDvTQMYFwdOmhooRg&s" className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 object-contain flex-shrink-0" />
            <img src="https://ultimatecycles.com.au/cdn/shop/collections/cervelo1024_21549b14-26da-4b59-a6ba-52b85d45a5c0_1200x1200.jpg?v=1720113402" className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 object-contain flex-shrink-0"/>
            <img src="https://m.media-amazon.com/images/I/71PqoSaJKvL._AC_UF1000,1000_QL80_.jpg" className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 object-contain flex-shrink-0"/>

            {/* Duplicate for infinite effect */}
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAACAgICNjY3v7+/6+vpfX1+6urqvr68EBATn5+d8fHyIiIj09PSYmJjh4eFSUlLQ0NA1NTVvb2+ioqLExMTZ2dljY2N1dXUQEBDJyckcHBySkpKpqalZWVk8PDxCQkJLS0spKSkVFRUmJia1tbXalgFtAAAD00lEQVR4nO3Y25LiIBCAYaJmFI3ns+M46o7v/4oLnumGKHOztVX/d2UlEKADDdEYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwX+j3GjlWXWOqjPKD7rmV9vutrFzxsSjemwV9LgeqVm81TI2wXWRZGzPMq7HwrUzeL//hik/lxY4pH13efOpay27yHX7k9XdrTDOvhn8nOUGZu3mlLvYfHW4tdZ3JOD1JW/XNWXnBzYU/Gd11KtfK9v3ia/eyTvLi9NHhr0idTnp8xszyuvvp5khejcKHNzKtUhqu+Ehe3Ny6u/jWUW+U6eE5/VagX4nqVVjAzZaVbD64r0L84xoZh5dscRLNPnHd7aph+566G2WjkE8qdskMk3AUIVL1S9n6NLwvbzfdtZ6Me30f1LxqXK7P12ro63nm+GS0i29VQuXecJEv5O1hJCi9+k6oxHtOx91dcO0cs0Hu+Hy0QzNVQubedXg7zCm2mLhr8/qgSCpI/hnqxboRrlr5A1RzTO0yKvc2w/thorXnEMn0fjRlkisuU4F/U2OfYcKp/l0fpwQZ7ZEqoTJJuFC3csW1Irub2oKCwRi12rqlnFr2xQ6RthTPaasSE1FiP/zq3M1GMtA7V6WTHpDSiuxGI51bi6p+h0hSU1A9RzU2k3nBBj/9TNq/P0AfkMiJTZ9ipsb8aowy2lNVQh1Ouj4syWk3iAWlxil+YivlicG6DeRXIzyIB21UiR8xGr9QI4ecg7M/NBYupZiBvLn8SNmVfjcS8Voafa61NpLl3yCjvVYl5Hbpg35O5EGvbPDy5e72Ud+JnShenPd0NW7fdP5blNGuVAmZ064LdSrat7dTiInsbvWnEP0lcLmuthD7YleNOopHLGSBUgZyeb2hT9b304ZaufWhV7vRLVZ7MU9sZLN+RUZ7okqow8nm2l2VTex9v5KpUZ8DA+rEdntTOgMVtpU5URtirulDn8zaNjl2e09T6qXMkp8VJvKpfLw2UOoc4I6EmStRPkFNAhXG+0It3Ye/SgWLS4R3dWeYZz6xiTlt/X8KN5FP2VHWtjgXPTmoEupw8rxQ5VerPR9Q/Ojf/Y/G53+1oB+HwlJv/DayY9eQC0Yf/OThJFioKgsVxWf/HOL++r232IrsRvugAz+6kjj411Fpui9LqDUSLlS1LbgQXJ7RfeufnVEkysVXfQ+K2PddyqJqBnTNjShRPX+euXc1PrWF03Ual6fmS5VPmlt5UXwBzitVr/Gbj0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPDv/AWkfinRJF87+gAAAABJRU5ErkJggg==" className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 object-contain flex-shrink-0" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPuUXDAsV6B-fxCh2wvz0o_42s9JwVyxx6hQ&s"  className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 object-contain flex-shrink-0" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/SCOTT_LOGO_WHITE.jpg/1280px-SCOTT_LOGO_WHITE.jpg" className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 object-contain flex-shrink-0" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi3_4gwNrxUe2rDZOGHaDvTQMYFwdOmhooRg&s" className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 object-contain flex-shrink-0" />
            <img src="https://ultimatecycles.com.au/cdn/shop/collections/cervelo1024_21549b14-26da-4b59-a6ba-52b85d45a5c0_1200x1200.jpg?v=1720113402" className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 object-contain flex-shrink-0"/>
            <img src="https://m.media-amazon.com/images/I/71PqoSaJKvL._AC_UF1000,1000_QL80_.jpg" className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 object-contain flex-shrink-0"/>


           
          </div>
        </div>



      </div>
    </div>
  );
};

export default BrandSection;
