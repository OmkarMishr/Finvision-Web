'use client';

import { motion } from 'framer-motion';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Book, GraduationCap, Users, ArrowRight, Star, ShoppingCart } from 'lucide-react';

const bookCategories = [
  {
    title: "Forex Trading",
    description: "Master the art of currency trading with these industry-standard guides.",
    icon: GraduationCap,
    books: [
      { 
        title: "Trading in the Zone", 
        author: "Mark Douglas", 
        rating: 4.9, 
        description: "The definitive guide to trading psychology and discipline. Essential for any serious trader.",
        image: "https://m.media-amazon.com/images/I/A1cf+swRSKL.UF1000,1000_QL80.jpg",
        amazonLink: "https://www.amazon.com/Trading-Zone-Confidence-Discipline-Attitude/dp/0735201447"
      },
      { 
        title: "Currency Trading for Dummies", 
        author: "Brian Dolan", 
        rating: 4.7, 
        description: "A great starting point for beginners to understand the basics of the global currency markets.",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1348716479i/1230495.jpg",
        amazonLink: "https://www.amazon.com/Currency-Trading-Dummies-Business-Personal/dp/1119824729"
      },
      { 
        title: "The Disciplined Trader", 
        author: "Mark Douglas", 
        rating: 4.8, 
        description: "Deep dive into the mental aspects of trading success and emotional control.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5-Tat5QgzDs8v_LYw1NP_Dw9KI3WAnHMs8-ZwvdqDJWeHJl6phYCql6DXHbGaALRcVSuIxt-l6D8EPHNdQR_d6-6Hn55-puVjmgmw2g&s",
        amazonLink: "https://www.amazon.in/Disciplined-Trader-Douglas/dp/0132157578"
      },
      { 
        title: "Japanese Candlestick Charting Techniques", 
        author: "Steve Nison", 
        rating: 4.9, 
        description: "Master technical analysis with the foundational book on candlestick patterns.",
        image: "https://m.media-amazon.com/images/I/81qZNGZXNzL.jpg",
        amazonLink: "https://www.amazon.com/Japanese-Candlestick-Charting-Techniques-Second/dp/0735201811"
      }
    ]
  },
  {
    title: "Personality Development",
    description: "Transform your mindset and build the character of a successful leader.",
    icon: Star,
    books: [
      { 
        title: "Atomic Habits", 
        author: "James Clear", 
        rating: 4.9, 
        description: "An easy and proven way to build good habits and break bad ones through tiny changes.",
        image: "https://m.media-amazon.com/images/I/81bGKUa1e0L._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299"
      },
      { 
        title: "The 7 Habits of Highly Effective People", 
        author: "Stephen Covey", 
        rating: 4.8, 
        description: "Timeless principles for personal and professional effectiveness and character building.",
        image: "https://m.media-amazon.com/images/I/71rmHeQeuRL.AC_UF1000,1000_QL80.jpg",
        amazonLink: "https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/1982137274"
      },
      { 
        title: "Think and Grow Rich", 
        author: "Napoleon Hill", 
        rating: 4.7, 
        description: "The classic guide to achieving success through mental attitude and burning desire.",
        image: "https://m.media-amazon.com/images/I/61IxJuRI39L.AC_UF350,350_QL50.jpg",
        amazonLink: "https://www.amazon.com/Think-Grow-Rich-Landmark-Bestseller/dp/1585424331"
      },
      { 
        title: "Can't Hurt Me", 
        author: "David Goggins", 
        rating: 4.9, 
        description: "Master your mind and defy the odds. A raw look at self-discipline and mental toughness.",
        image: "https://m.media-amazon.com/images/I/81YJFNc54lL.UF1000,1000_QL80.jpg",
        amazonLink: "https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544512287"
      }
    ]
  },
  {
    title: "Human Etiquettes",
    description: "Enhance your social intelligence and professional relationships.",
    icon: Users,
    books: [
      { 
        title: "How to Win Friends and Influence People", 
        author: "Dale Carnegie", 
        rating: 4.9, 
        description: "The foundational book on improving social skills and building meaningful connections.",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1442726934i/4865.jpg",
        amazonLink: "https://www.amazon.in/Friends-Influence-People-International-Bestseller/dp/8194899133/ref=sr_1_2?adgrpid=126785787482&dib=eyJ2IjoiMSJ9.RPPkci8pfBUWX8TMtKPCIlYM5kWoVniDrIPrd_1yoD5qWXUvapU99XKSdzPUO3W-eBG1TCUr3hpqb5HeOo3o9Z7T5nvyTOdhWog4GReFPnkRYeKj_xUw2XVb9iBipnMXz3ciG560XGYzLJSri2HJO2281KPNhU_CLBdnXQN5UE3dWRmsuZPa3Iz1R2CMY9iTPbHXmGOwB0hd4AXJECeSHQfR8V6iNqVDDJiy1Yn4rJI.9AISjWZKYqmKzWR9qChJAYV7BpGqxa5Muipu5emGJkg&dib_tag=se&ext_vrnc=hi&hvadid=590338926655&hvdev=c&hvlocphy=9304059&hvnetw=g&hvqmt=e&hvrand=15186839294084995003&hvtargid=kwd-316045935731&hydadcr=12495_2334123&keywords=how+to+win+friends+and+influence+people%27+by+dale+carnegie&mcid=1d2dc1f717b0391488a3e60eea2d1978&nsdOptOutParam=true&qid=1774353436&sr=8-2"
      },
      { 
        title: "The Power of Body Language", 
        author: "Joe Navarro", 
        rating: 4.7, 
        description: "Read people's non-verbal intentions and project confidence in any situation.",
        image: "https://m.media-amazon.com/images/I/61Q-yTWzoUL._SL1000_.jpg",
        amazonLink: "https://www.amazon.in/Power-Body-Language-Joe-Navarro/dp/1442360917"
      },
      { 
        title: "Emotional Intelligence 2.0", 
        author: "Travis Bradberry", 
        rating: 4.6, 
        description: "Practical strategies to increase your EQ and navigate social complexities.",
        image: "https://m.media-amazon.com/images/I/615+BmKzRYL.AC_UF1000,1000_QL80.jpg",
        amazonLink: "https://www.amazon.com/Emotional-Intelligence-2-0-Travis-Bradberry/dp/0974320625"
      },
      { 
        title: "Crucial Conversations", 
        author: "Patterson & Grenny", 
        rating: 4.8, 
        description: "Tools for talking when stakes are high and emotions are strong.",
        image: "https://m.media-amazon.com/images/I/61sC5vFyRHL.AC_UF1000,1000_QL80.jpg",
        amazonLink: "https://www.amazon.in/CRUCIAL-CONVERSATIONS-Joseph-Grenny/dp/9355323352/ref=sr_1_1?crid=R24S7378K4N&dib=eyJ2IjoiMSJ9.pcwJU27u7B7TvKbj2aaey2_jXWZC7uXXj5KHCwMOMNw0mJ1BORFVaGN1dds7TS8Q9sL7KoaMj9Kq4YEf6HvPBjapusKrDPAEdGGRKEI1HTMISyJqPgVhmEOvFMnE7MgObeEKnp_RvOxRDeeUY-HGJHx25bYj4athgjWeh357U_C5tDnaYb8eXvcmrPmYZNV6Bh9qVTQABT5g_tABG_TYZhw66yz9rATmLyKyQUmb1yE.rm67AlShKwWJ8S-wEkT7UNP2EHLUKib2tW2QbJTg5CY&dib_tag=se&keywords=Crucial+Conversations+By+Patterson+%26+Grenny&qid=1774353662&s=books&sprefix=crucial+conversations+by+patterson+%26+grenny%2Cstripbooks%2C334&sr=1-1"
      }
    ]
  }
];

// ── Reusable external link opener ─────────────────────────────────
const openExternal = (url: string) => {
  const isInIframe = window.self !== window.top;
  if (isInIframe) {
    window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
  } else {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto">

          {/* ── Page Header ──────────────────────────────────── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Book className="w-5 h-5 text-primary" />
              <span className="text-primary font-bold text-sm tracking-widest uppercase">Knowledge Hub</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Essential <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Readings</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Master the markets, your mind, and your interactions with our curated selection of industry-leading books.
            </p>
          </motion.div>

          {/* ── Book Categories ───────────────────────────────── */}
          <div className="space-y-32">
            {bookCategories.map((category, catIdx) => (
              <div key={catIdx}>
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-white/10 shadow-xl shadow-primary/5">
                    <category.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight">{category.title}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {category.books.map((book, bookIdx) => (
                    <motion.div
                      key={bookIdx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: bookIdx * 0.1 }}
                      className="group flex flex-col"
                    >
                      {/* ── Book Cover ─────────────────────────── */}
                      <div className="relative aspect-[3/4.5] mb-6 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:scale-[1.03] group-hover:-translate-y-3 group-hover:shadow-primary/30 border border-white/5 bg-neutral-900">
                        
                        {/* Book Spine */}
                        <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/40 z-20" />
                        <div className="absolute left-2 top-0 bottom-0 w-[1px] bg-white/10 z-20" />
                        
                        {/* Lighting Shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/5 z-10 pointer-events-none" />
                        
                        <img 
                          src={book.image} 
                          alt={book.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />

                        {/* Rating Badge */}
                        <div className="absolute top-4 right-4 z-30 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                          <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                          <span className="text-white text-xs font-bold">{book.rating}</span>
                        </div>

                        {/* ── Hover Overlay — BUY ON AMAZON ──────
                            FIX 1: removed hover:bg-white so button stays cyan
                            FIX 2: pointer-events-none on shimmer so button is clickable
                        ─────────────────────────────────────────── */}
                        <div className="absolute inset-0 z-20 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4 px-6 text-center">
                          <button 
                            onClick={() => openExternal(book.amazonLink)}
                            className="w-full py-4 bg-primary text-background font-black rounded-xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-primary/20 hover:bg-primary/80 hover:shadow-primary/40 hover:scale-105 active:scale-95"
                          >
                            <ShoppingCart className="w-5 h-5" /> BUY ON AMAZON
                          </button>
                          <p className="text-xs text-muted-foreground font-medium">Verified Product Link</p>
                        </div>
                      </div>

                      {/* ── Book Info ──────────────────────────── */}
                      <div className="flex-1 px-2">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-md">Must Read</span>
                        </div>
                        <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                          {book.title}
                        </h3>
                        <p className="text-muted-foreground text-sm font-semibold mb-3">By {book.author}</p>
                        <p className="text-muted-foreground/80 text-sm line-clamp-3 leading-relaxed font-medium">
                          {book.description}
                        </p>
                      </div>

                      {/* ── Bottom Link ────────────────────────── */}
                      <button 
                        onClick={() => openExternal(book.amazonLink)}
                        className="mt-6 mx-2 flex items-center gap-2 text-sm font-black text-primary hover:text-accent transition-all group-hover:gap-3 uppercase tracking-wider"
                      >
                        VIEW ON AMAZON <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA Section ───────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-40 p-1 rounded-[3rem] bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x shadow-2xl shadow-primary/20"
          >
            <div className="bg-background/90 backdrop-blur-3xl p-12 md:p-24 rounded-[2.9rem] text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] -z-10" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 blur-[120px] -z-10" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">Expand Your Horizon</h2>
                <p className="text-muted-foreground text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                  "Knowledge is the only asset that increases when shared." Dive into these resources to build a solid foundation for your trading career and personal growth.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button 
                    onClick={() => {
                      const target = document.getElementById('courses');
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                      else window.location.href = '/#courses';
                    }}
                    className="w-full sm:w-auto px-12 py-5 bg-primary text-background font-black rounded-2xl hover:bg-primary/80 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/40 text-lg"
                  >
                    EXPLORE COURSES
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}