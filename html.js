const data = [
  {
    Title: 'Foods That Cause Stomach Fat Or Bloating',
    Format: 'Blog',
    Industry: 'Health',
    Tag: 'Weight loss',
    Link:
      'https://ezinearticles.com/?Effective-Exercises-to-Lose-Stomach-Fat&id=2787327',
  },
  {
    Title: 'Thomson Fertility Centre',
    Format: 'Web Content',
    Industry: 'Health',
    Tag: 'Fertility Services, Infertility Conditions, Fertility Assessment',
    Link: 'https://thomsonfertility.com.sg/',
  },
  {
    Title: 'Speed Green',
    Format: 'Web Content, Blog',
    Industry: 'Cannabis',
    Tag: 'CBD, Health and Wellness, Latest News, Marijuana',
    Link: 'https://speedgreens.co/',
  },
  {
    Title: 'West Coast Weeds',
    Format: 'Web Content, Product Descriptions',
    Industry: 'Cannabis',
    Tag:
      'Budder, Citrus, Concentrate, Crystallize, Daytime, Depression, Edibles, Energetic, Euphoric, Everest, Shatter, Extracts, Fatigue , Featured, Flower, Herbal, Hybrid, Indica',
    Link: 'https://www.westcoastweeds.com/',
  },
  {
    Title: 'Pabau Clinic Management Software',
    Format: 'Web Content',
    Industry: 'Medical Clinic',
    Tag: 'Clinic Management Software, Medical Software, CRM System',
    Link: 'https://www.pabau.com/',
  },
  {
    Title: 'Watsons Health',
    Format: 'Web Content, Product Descriptions',
    Industry: 'Health, Drugs',
    Tag: 'Health articles, Drugs, Healthy Tips',
    Link: 'https://watsonshealth.com.ph/',
  },
  {
    Title: 'Doctor Tipser',
    Format: 'Web Content',
    Industry: 'Medical Clinic',
    Tag:
      "Addiction and Rehab, Health problems, Medications and treament, Women's health issues",
    Link: 'https://www.doctortipster.com/',
  },
  {
    Title: 'Yoga How',
    Format: 'Blog',
    Industry: 'Health',
    Tag: 'Benefits of yoga, types of yoga',
    Link: 'https://theyogahow.com/',
  },
  {
    Title: 'Zencare',
    Format: 'Web Content',
    Industry: 'Health',
    Tag: 'Therapy, mental health, therapists, therapy types',
    Link: 'https://zencare.co/',
  },
  {
    Title: 'Archives of Psychology',
    Format: 'Web Content',
    Industry: 'Research',
    Tag: 'behavioral research',
    Link: 'https://archivesofpsychology.org/',
  },
  {
    Title: 'PSC',
    Format: 'Web Content',
    Industry: 'Nature',
    Tag: 'Medicinal benefits, Health',
    Link: 'https://epsce.com/',
  },
  {
    Title: 'Baseclass',
    Format: 'Web Content',
    Industry: 'Technical',
    Tag: 'software engineering, software design, apps development company',
    Link: 'http://www.baseclass.co.in/',
  },
  {
    Title: 'Geeky Duck',
    Format: 'Web Content',
    Industry: 'Technical',
    Tag: 'Information technology, Website development Tips',
    Link: 'https://geekyduck.com/',
  },
  {
    Title: 'RWT Design & Construction',
    Format: 'Web Content',
    Industry: 'Home, Garden, Furniture',
    Tag: 'home remodeling, home restoration, home addition projects',
    Link: 'https://rwthomeremodeling.com/',
  },
  {
    Title: 'Urban Gardeners Republic',
    Format: 'Web Content',
    Industry: 'Home, Garden, Furniture',
    Tag: 'Gardening tool, gardening tips',
    Link: 'https://urbangardenersrepublic.com/',
  },
  {
    Title: 'New York Furniture Outlets',
    Format: 'Web Content, Product Descriptions',
    Industry: 'Home, Garden, Furniture',
    Tag: 'Home Furniture',
    Link: 'https://nyfurnitureoutlets.com/',
  },
  {
    Title: 'Designer Rugs',
    Format: 'Web Content, Product Descriptions',
    Industry: 'Home, Garden, Furniture',
    Tag: 'Home accessories',
    Link: 'https://www.designerrugs.com.au/',
  },
  {
    Title: 'Amazon',
    Format: 'Product Descriptions',
    Industry: 'Shopping and retail',
    Tag: 'Online Store',
    Link:
      'https://www.amazon.com/Bamboo-Toothbrush-Charcoal-Bristles-Toothbrushes/dp/B076LF8L8M',
  },
  {
    Title: 'GOLONZO',
    Format: 'Web Content, Product Descriptions',
    Industry: 'Shopping and retail',
    Tag: 'Online Store, Online Business',
    Link: 'https://golonzo.com/products/comfy-baby-support-seat',
  },
  {
    Title: 'Small Intestinal Bacterial Overgrowth (SIBO)',
    Format: 'Blog',
    Industry: 'Health',
    Tag:
      'bacterial overgrowth, digestion, dogs, sibo, Small Intestinal Bacterial Overgrowth, thegut',
    Link: 'https://guthack.com/gut/small-intestinal-bacterial-overgrowth-sibo/',
  },
  {
    Title: 'Cardamom Soap: Effective for Skin Whitening?',
    Format: 'Blog',
    Industry: 'Beauty Essentials',
    Tag:
      'Anti-Aging, cardamom soap, Face Wash, Skin Whitening, soap, whitening',
    Link: 'https://brightwhiteskin.com/author/marie/',
  },
  {
    Title: 'Healthy Avenue Magazine',
    Format: 'Blog',
    Industry: 'Health',
    Tag: 'Health and Fitness, Medical Conditions',
    Link: 'https://healthyavenue.org/',
  },
  {
    Title: 'Healthy Life Note',
    Format: 'Blog',
    Industry: 'Health',
    Tag: 'Health and Fitness',
    Link: 'https://healthylifenote.com/author/marie-gabrielle/',
  },
  {
    Title: 'Eternus Global Blogs',
    Format: 'Blog',
    Industry: 'Information Technology',
    Tag: 'KPO, Information Technology, Digital Marketing',
    Link: 'https://www.eternusglobal.com/blog/',
  },
  {
    Title: 'Ezine Articles',
    Format: 'Blog',
    Industry: 'Content Marketing, Health',
    Tag: 'Health Topics',
    Link:
      'http://ezinearticles.com/expert/Dr._Marie_Gabrielle_A._Laguna/386896',
  },
  {
    Title: 'Natural Detoxification: A MUST in Today�s Modern World',
    Format: 'Blog',
    Industry: 'Health',
    Tag: 'detoxification',
    Link:
      'https://www.selfgrowth.com/articles/natural-detoxification-a-must-in-today-s-modern-world',
  },
  {
    Title: 'The Wonders of Arnica Topical Psc',
    Format: 'Blog',
    Industry: 'Health',
    Tag: 'Arnica uses',
    Link:
      'https://www.sooperarticles.com/health-fitness-articles/nutrition-articles/wonders-arnica-topical-psc-30329.html',
  },
  {
    Title: 'Sinus Eliminato Complex',
    Format: 'Blog',
    Industry: 'Health',
    Tag: 'Health Disorder',
    Link:
      'https://www.sooperarticles.com/health-fitness-articles/general-health-articles/sinus-eliminato-complex-28505.html',
  },
  {
    Title: 'Daily Endurance Complex',
    Format: 'Blog',
    Industry: 'Health',
    Tag: 'Health and Fitness',
    Link:
      'https://www.sooperarticles.com/health-fitness-articles/general-health-articles/daily-endurance-complex-24786.html',
  },
  {
    Title: 'As Good As New Complex',
    Format: 'Blog',
    Industry: 'Health',
    Tag: 'General health',
    Link:
      'https://www.sooperarticles.com/health-fitness-articles/general-health-articles/good-new-complex-23594.html',
  },
  {
    Title: 'Herbal Therapy in Cough And Colds',
    Format: 'Blog',
    Industry: 'Health',
    Tag: 'Herbal Medication',
    Link:
      'https://www.sooperarticles.com/health-fitness-articles/general-health-articles/herbal-therapy-cough-colds-23593.html',
  },
  {
    Title: 'Black Elder/ Sundew Combo: The Influenza Booster',
    Format: 'Blog',
    Industry: 'Health',
    Tag: 'Influenza Booster',
    Link:
      'https://www.sooperarticles.com/health-fitness-articles/general-health-articles/black-elder-sundew-combo-influenza-booster-22588.html',
  },
  {
    Title:
      'Quesnel Billy Barker Days Carnival 2018: 4 Amazing Days of Attractions and Family Fun!',
    Format: 'Blog',
    Industry: 'News',
    Tag: 'Carnival Activities',
    Link:
      'https://shootingstar.ca/quesnel-billy-barker-days-carnival-2018-4-amazing-days-of-attractions-and-family-fun/',
  },
];

updateHTML = (data) => {
  const html = document.querySelector('#container');

  html.innerHTML = '';
  data.map((item) => {
    html.innerHTML += `
     <li
            class="item-box shadow-lg p-4 m-2 border-t-2 border-blue-600"
            data-industry="${item.Industry}"
            data-format="${item.Format}"
            data-tag="${item.Tag}"
          >
            <div class="aspect">
              <div class="aspect__inner">
                <div>
                  <!--<img class="" src="./img/thomsonfertilitylogo.png" alt="" /> -->
                </div>
                <h2 class="font-semibold my-2">${item.Title}</h2>
                <p>
                  
                </p>
                <a
                  class="my-2 border-b border-gray-700 inline-block"
                  href="${item.Link}"
                  >Read More &rarr;</a
                >
                <h4 class="text-gray-400">
                  Industry:<span class="text-gray-700 capitalize"> ${item.Industry}</span>
                </h4>
                <h4 class="text-gray-400">
                  Format:<span class="text-gray-700 capitalize"> ${item.Format}</span>
                </h4>
                <h4 class="text-gray-400">
                  Tag:<span class="text-gray-700 capitalize"> ${item.Tag}</span>
                </h4>
              </div>
            </div>
          </li>
    
    `;
  });
};

updateHTML(data);

window.addEventListener('load', () => {
  registerSw();
});

const registerSw = async () => {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      console.log('SW Registration Failed');
    }
  }
};
