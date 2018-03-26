console.log('sanity check')
$(document).ready(function() {
  console.log('doc ready')
    var allTheDoggos = [
        {
            name: 'Petunia',
            age: 1,
            photo: 'https://fortunedotcom.files.wordpress.com/2017/08/512536165-e1510081190643.jpg',
            city: 'SF',
            state: 'CA'
        },
        {
            name: 'Boris',
            age: 2,
            photo: 'https://www.stayathomemum.com.au/cache/860x380-0/wp-content/uploads/2015/10/Teacup-Pomeranian-White-e1446515202248.jpg',
            city: 'SF',
            state: 'CA'
        },
        {
            name: 'Millie',
            age: 1,
            photo: 'https://www.babble.com/wp-content/uploads/2013/09/puppy5-624x398.jpg',
            city: 'LA',
            state: 'CA'
        },
        {
            name: 'Panda',
            age: 3,
            photo: 'https://tailandfur.com/wp-content/uploads/2016/11/40-Fluffy-Pictures-of-Puppies-that-Looks-like-Pandas-3.jpg',
            city: 'SD',
            state: 'CA'
        },
        {
            name: 'Phoebe',
            age: 4,
            photo: 'http://www.astro.cornell.edu/~derg/style/3864733873_57e2aae81c_o.jpg',
            city: 'SF',
            state: 'CA'
        },
        {
            name: 'Ian',
            age: 8,
            photo: 'https://static1.squarespace.com/static/53a096cce4b00d7644776a0b/544d5f5ce4b0b7c1dfbfb70e/544d5fb8e4b048f0ef614dae/1414356922235/Shake+Puppies-1_Mixbreed.jpg',
            city: 'SF',
            state: 'CA'
        }
    ];
// filter allTheDoggos for just the puppies (< 2 years)
    var allPuppies = allTheDoggos.filter(function(dog){
      return (dog.age < 2)
    });
    console.log(allPuppies);
// fillter allTheDoggos for those whose names start with P
    var doggosWithPNames = allTheDoggos.filter(function(dog){
      return  (dog.name[0] === "P")
    });


    var doggosInSf = allTheDoggos.filter(function(dog){
      return (dog.city === "SF")
    });

    var seniorDoggos = allTheDoggos.filter(function(dog){
      return (dog.age > 7)
    });

    var californiaDoggos = allTheDoggos.filter(function(dog){
      return (dog.state === "CA")
    });

    // 1. Figure out where each array of doggos should be displayed in the index.html
    // 2. Iterate through each array and append the doggo's name and photo to the HTML
    // 3. Use Bootstrap to style these dogs (Check out Bootstrap cards: https://getbootstrap.com/docs/4.0/components/card/)


//     allPuppies.forEach(function(dog){
//
//       // $('#puppies').append(`<img class="card-img-top" alt="Card image cap" src="${dog.photo}" >`);
//       // $('#puppies').append(`<div class="card-body"><p class="card-text">${dog.name}<p></div>`);
//       // $('#puppies .card-body').append(`<p class="card-text">${dog.name}<p>`);
//       $('#puppies').append(`<div class="card" style="width: 18rem;">
//                               <img class="card-img-top" src="${dog.photo}" alt="Card image cap">
//                               <div class="card-body">
//                                 <p class="card-text">${dog.name}</p>
//                               </div>
//                             </div>`)
//     });
//
//     doggosWithPNames.forEach(function(dog){
//
//       $('#p-name').append(`<div class="card" style="width: 18rem;">
//                               <img class="card-img-top" src="${dog.photo}" alt="Card image cap">
//                               <div class="card-body">
//                                 <p class="card-text">${dog.name}</p>
//                               </div>
//                             </div>`);
//     });
//
//     doggosInSf.forEach(function(dog){
//
//       $('#sf').append(`<div class="card" style="width: 18rem;">
//                               <img class="card-img-top" src="${dog.photo}" alt="Card image cap">
//                               <div class="card-body">
//                                 <p class="card-text">${dog.name}</p>
//                               </div>
//                             </div>`);
//     });
//
//     seniorDoggos.forEach(function(dog){
//
//       $('#senior').append(`<div class="card" style="width: 18rem;">
//                               <img class="card-img-top" src="${dog.photo}" alt="Card image cap">
//                               <div class="card-body">
//                                 <p class="card-text">${dog.name}</p>
//                               </div>
//                             </div>`);
//     });
//
//     californiaDoggos.forEach(function(dog){
//
//       $('#ca').append(`<div class="card" style="width: 18rem;">
//                               <img class="card-img-top" src="${dog.photo}" alt="Card image cap">
//                               <div class="card-body">
//                                 <p class="card-text">${dog.name}</p>
//                               </div>
//                             </div>`);
//     });
//
//
// });


    // STEP 1: Figure out which div each array of doggos should be appended to in the index.html;
    // Then, iterate through each array and append the doggo's name and photo to that div
    allPuppies.forEach(function(dog) {
        appendDogCardToDiv(dog, '#puppies');
    });

    doggosWithPNames.forEach(function(dog) {
        appendDogCardToDiv(dog, '#p-name');
    });

    doggosInSf.forEach(function(dog) {
        appendDogCardToDiv(dog, '#sf');
    });

    seniorDoggos.forEach(function(dog) {
        appendDogCardToDiv(dog, '#senior');
    });

    californiaDoggos.forEach(function(dog) {
        appendDogCardToDiv(dog, '#ca');
    });

    // BONUS: DRY up your code!
    function appendDogCardToDiv(dog, selector) {
        $(selector).append(`
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="${ dog.photo }" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">${ dog.name }</h5>
              </div>
              <div id="doggo-ages">
              <ul><li>${dog.age*7} dog years old</li></ul>
              </div>
            </div>
        `);
    }
});
