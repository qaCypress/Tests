

describe("Отримання кількості ігор", function () {

  it("Get list of new and popular Games Spianmba", function () {

    cy.writeFile('SavedList.json', {});
    
    cy.visit('https://spinamba.com/en/games/new_games')
    cy.get('.next_page > .button').click()

    for(let i = 0; i < 5; i++) {
      cy.scrollTo('bottom')
      cy.wait(5000)
    }


    let dataKeys = [];
    cy.get('.games_grid_wrap')
      .find('.item')
      .each(($el) => {
          dataKeys.push($el.attr('data-key'));
      })
      .then(() => {
        const neww = dataKeys
          cy.writeFile('SavedList.json', {new_games: {Spinamba: neww }});
        
      });

      cy.visit('https://spinamba.com/en/games/popular')
      cy.get('.next_page > .button').click()
  
      for(let i = 0; i < 3; i++) {
        cy.scrollTo('bottom')
        cy.wait(5000)
      }

      let dataKeys2 = [];

      cy.get('.games_grid_wrap')
      .find('.item')
      .each(($el) => {
        dataKeys2.push($el.attr('data-key'));
      })
      .then(() => {
        const neww2 = dataKeys2
        
        cy.readFile('SavedList.json').then((existingData) => {
          const newData = {
           popular: {Spinamba: neww2}

          };
          const mergedJson = {
            ...existingData,
            ...newData
          };
  
          cy.writeFile('SavedList.json', mergedJson);
        });
        
        
      });
  })

  it("Get list of new and popular Games AllRight", function() {
    cy.visit('https://allrightcasino.com/en/games/new_games')

    cy.get('.next_page > .button').click()
    for(let i = 0; i < 5; i++) {
      cy.scrollTo('bottom')
      cy.wait(5000)
    }

    let dataKeys = [];
    cy.get('.games_grid_wrap')
      .find('.item')
      .each(($el) => {
          dataKeys.push($el.attr('data-key'));
      })
      .then(() => {
        const neww = dataKeys

        cy.readFile('SavedList.json').then((existingData) => {
          const newData = {
            Spinamba: existingData.new_games.Spinamba,
            AllRight: neww

          };
          const mergedJson = {
            ...existingData,
            new_games: newData
          };
  
          cy.writeFile('SavedList.json', mergedJson);
        });
  
        
      });

      cy.visit('https://allrightcasino.com/en/games/popular')

      cy.get('.next_page > .button').click()
      for(let i = 0; i < 3; i++) {
        cy.scrollTo('bottom')
        cy.wait(5000)
      }


      let dataKeys2 = [];
      cy.get('.games_grid_wrap')
      .find('.item')
      .each(($el) => {
          dataKeys2.push($el.attr('data-key'));
      })
      .then(() => {
        const neww2 = dataKeys2

        cy.readFile('SavedList.json').then((existingData) => {
          const newData = {
            Spinamba: existingData.popular.Spinamba,
            AllRight: neww2
          };
          const mergedJson = {
            ...existingData,
            popular: newData
          };
  
          cy.writeFile('SavedList.json', mergedJson);
        });
  
        
      });
  })

  it("Get list of new and popular Games LuckyBird", function () {
    cy.visit('https://luckybirdcasino.com/en/games/new_games')
    cy.get('.next_page > .button').click()
    for(let i = 0; i < 5; i++) {
      cy.scrollTo('bottom')
      cy.wait(5000)
    }

    let dataKeys = [];
    cy.get('.games_grid_wrap')
      .find('.item')
      .each(($el) => {
          dataKeys.push($el.attr('data-key'));
      })
      .then(() => {
        const neww = dataKeys

        cy.readFile('SavedList.json').then((existingData) => {
          const newData = {
            Spinamba: existingData.new_games.Spinamba,
            AllRight: existingData.new_games.AllRight,
            LuckyBird: neww

          };
          const mergedJson = {
            ...existingData,
            new_games: newData
          };
  
          cy.writeFile('SavedList.json', mergedJson);
        });
      });

      cy.visit('https://luckybirdcasino.com/en/games/popular')

      cy.get('.next_page > .button').click()
      for(let i = 0; i < 3; i++) {
        cy.scrollTo('bottom')
        cy.wait(5000)
      }
      let dataKeys2 = [];
      cy.get('.games_grid_wrap')
      .find('.item')
      .each(($el) => {
          dataKeys2.push($el.attr('data-key'));
      })
      .then(() => {
        const neww2 = dataKeys2

        cy.readFile('SavedList.json').then((existingData) => {
          const newData = {
            Spinamba: existingData.popular.Spinamba,
            AllRight: existingData.popular.AllRight,
            LuckyBird: neww2
          };
          const mergedJson = {
            ...existingData,
            popular: newData
          };
  
          cy.writeFile('SavedList.json', mergedJson);
        });
  
        
      });
  })

  it("Get list of new and popular Games Slottica", function () {
    cy.visit('https://slottica.com/en/games/new_games')
    cy.get('.next_page > .button').click()
    for(let i = 0; i < 5; i++) {
      cy.scrollTo('bottom')
      cy.wait(5000)
    }

    let dataKeys = [];
    cy.get('.games_grid_wrap')
      .find('.item')
      .each(($el) => {
          dataKeys.push($el.attr('data-key'));
      })
      .then(() => {
        const neww = dataKeys

        cy.readFile('SavedList.json').then((existingData) => {
          const newData = {
            Spinamba: existingData.new_games.Spinamba,
            AllRight: existingData.new_games.AllRight,
            LuckyBird: existingData.new_games.LuckyBird,
            Slottica: neww

          };
          const mergedJson = {
            ...existingData,
            new_games: newData
          };
  
          cy.writeFile('SavedList.json', mergedJson);
        });
      });

      cy.visit('https://slottica.com/en/games/popular')
      cy.get('.next_page > .button').click()
      for(let i = 0; i < 3; i++) {
        cy.scrollTo('bottom')
        cy.wait(5000)
      }

      let dataKeys2 = [];
      cy.get('.games_grid_wrap')
      .find('.item')
      .each(($el) => {
          dataKeys2.push($el.attr('data-key'));
      })
      .then(() => {
        const neww2 = dataKeys2

        cy.readFile('SavedList.json').then((existingData) => {
          const newData = {
            Spinamba: existingData.popular.Spinamba,
            AllRight: existingData.popular.AllRight,
            LuckyBird: existingData.popular.LuckyBird,
            Slottica: neww2
          };
          const mergedJson = {
            ...existingData,
            popular: newData
          };
  
          cy.writeFile('SavedList.json', mergedJson);
        });
  
        
      });
    
  })

  it("Get list of new and popular Games SlottyWay", function () {
    cy.visit('https://slottyway.com/en/games/new_games')
    
    cy.get('.next_page > .button').click()
    for(let i = 0; i < 5; i++) {
      cy.scrollTo('bottom')
      cy.wait(5000)
    }

    let dataKeys = [];
    cy.get('.games_grid_wrap')
      .find('.item')
      .each(($el) => {
          dataKeys.push($el.attr('data-key'));
      })
      .then(() => {
        const neww = dataKeys

        cy.readFile('SavedList.json').then((existingData) => {
          const newData = {
            Spinamba: existingData.new_games.Spinamba,
            AllRight: existingData.new_games.AllRight,
            LuckyBird: existingData.new_games.LuckyBird,
            Slottica: existingData.new_games.Slottica,
            SlottyWay: neww

          };
          const mergedJson = {
            ...existingData,
            new_games: newData
          };
  
          cy.writeFile('SavedList.json', mergedJson);
        });
      });

      cy.visit('https://slottyway.com/en/games/popular')
    
      cy.get('.next_page > .button').click()
      for(let i = 0; i < 3; i++) {
        cy.scrollTo('bottom')
        cy.wait(5000)
      }


      let dataKeys2 = [];
      cy.get('.games_grid_wrap')
      .find('.item')
      .each(($el) => {
          dataKeys2.push($el.attr('data-key'));
      })
      .then(() => {
        const neww2 = dataKeys2

        cy.readFile('SavedList.json').then((existingData) => {
          const newData = {
            Spinamba: existingData.popular.Spinamba,
            AllRight: existingData.popular.AllRight,
            LuckyBird: existingData.popular.LuckyBird,
            Slottica: existingData.popular.Slottica,
            SlottyWay: neww2
          };
          const mergedJson = {
            ...existingData,
            popular: newData
          };
  
          cy.writeFile('SavedList.json', mergedJson);
        });
  
        
      });
  })

  it("Get list of new and popular Games SpinBounty", function () {
    cy.visit('https://spinbounty.com/en/games/new_games')

    cy.get('.next_page > .button').click()
    for(let i = 0; i < 5; i++) {
      cy.scrollTo('bottom')
      cy.wait(5000)
    }

    let dataKeys = [];
    cy.get('.grid_games')
      .find('.item')
      .each(($el) => {
          dataKeys.push($el.attr('data-key'));
      })
      .then(() => {
        const neww = dataKeys

        cy.readFile('SavedList.json').then((existingData) => {
          const newData = {
            Spinamba: existingData.new_games.Spinamba,
            AllRight: existingData.new_games.AllRight,
            LuckyBird: existingData.new_games.LuckyBird,
            Slottica: existingData.new_games.Slottica,
            SlottyWay: existingData.new_games.SlottyWay,
            SpinBounty: neww

          };
          const mergedJson = {
            ...existingData,
            new_games: newData
          };
  
          cy.writeFile('SavedList.json', mergedJson);
        });
      });


      cy.visit('https://spinbounty.com/en/games/popular')

      cy.get('.next_page > .button').click()
      for(let i = 0; i < 3; i++) {
        cy.scrollTo('bottom')
        cy.wait(5000)
      }

      let dataKeys2 = [];
      cy.get('.grid_games')
      .find('.item')
      .each(($el) => {
          dataKeys2.push($el.attr('data-key'));
      })
      .then(() => {
        const neww2 = dataKeys2

        cy.readFile('SavedList.json').then((existingData) => {
          const newData = {
            Spinamba: existingData.popular.Spinamba,
            AllRight: existingData.popular.AllRight,
            LuckyBird: existingData.popular.LuckyBird,
            Slottica: existingData.popular.Slottica,
            SlottyWay: existingData.popular.SlottyWay,
            SpinBounty: neww2
          };
          const mergedJson = {
            ...existingData,
            popular: newData
          };
  
          cy.writeFile('SavedList.json', mergedJson);
        });
  
        
      });
  })

  it("Get list of new and popular Games Viks", function() {
    cy.visit('https://viks.com/en/games/new_games')

    cy.get('.next_page > .button').click()
    for(let i = 0; i < 5; i++) {
      cy.scrollTo('bottom')
      cy.wait(5000)
    }
    let dataKeys = [];
    cy.get('.games_grid_wrap')
      .find('.item')
      .each(($el) => {
          dataKeys.push($el.attr('data-key'));
      })
      .then(() => {
        const neww = dataKeys

        cy.readFile('SavedList.json').then((existingData) => {
          const newData = {
            Spinamba: existingData.new_games.Spinamba,
            AllRight: existingData.new_games.AllRight,
            LuckyBird: existingData.new_games.LuckyBird,
            Slottica: existingData.new_games.Slottica,
            SlottyWay: existingData.new_games.SlottyWay,
            SpinBounty: existingData.new_games.SpinBounty,
            Viks: neww

          };
          const mergedJson = {
            ...existingData,
            new_games: newData
          };
  
          cy.writeFile('SavedList.json', mergedJson);
        });
      });

      cy.visit('https://viks.com/en/games/popular')

      cy.get('.next_page > .button').click()
      for(let i = 0; i < 3; i++) {
        cy.scrollTo('bottom')
        cy.wait(5000)
      }

      let dataKeys2 = [];
      cy.get('.games_grid_wrap')
      .find('.item')
      .each(($el) => {
          dataKeys2.push($el.attr('data-key'));
      })
      .then(() => {
        const neww2 = dataKeys2

        cy.readFile('SavedList.json').then((existingData) => {
          const newData = {
            Spinamba: existingData.popular.Spinamba,
            AllRight: existingData.popular.AllRight,
            LuckyBird: existingData.popular.LuckyBird,
            Slottica: existingData.popular.Slottica,
            SlottyWay: existingData.popular.SlottyWay,
            SpinBounty: existingData.popular.SpinBounty,
            Viks: neww2
          };
          const mergedJson = {
            ...existingData,
            popular: newData
          };
  
          cy.writeFile('SavedList.json', mergedJson);
        });
  
        
      });
  })
})



const listOfGames = ['Spinamba', 'AllRight', 'LuckyBird', 'Slottica', 'SlottyWay', 'SpinBounty', 'Viks']


describe("Вивід кількість ігор", function () {

  it('Count of games', function () {
    cy.readFile('SavedList.json').then((games => {
      for (let i = 0; i < listOfGames.length; i++) { 
        cy.log(`${listOfGames[i]} has ${games.new_games[listOfGames[i]].length} new games and ${games.popular[listOfGames[i]].length} popular games`)
      }
    }))
  })


  /*for (let i = 0; i < listOfGames.length; i++) {
    it.skip(`${listOfGames[0]} vs ${listOfGames[i]}`, function () {
      cy.readFile('SavedList.json').then((games => {
        expect(games[listOfGames[0]]).to.deep.equal(games[listOfGames[i]])
      }))
    })      
  }*/

})

describe("Порівняння нових ігор не враховуючи порядку", function() {
  for (let i = 0; i < listOfGames.length; i++) {
    it(`Comapare ${listOfGames[0]} and ${listOfGames[i]}`, function() {
      cy.readFile('SavedList.json').then((games => {
  
        const sortedJson = games.new_games[listOfGames[0]].sort((a, b) => {
          return a.localeCompare(b);
        });
  
        const sortedJson2 = games.new_games[listOfGames[i]].sort((a, b) => {
          return a.localeCompare(b);
        });
        
        cy.wrap(games.new_games[listOfGames[0]]).each((value, key) => {
          expect(value).to.deep.equal(games.new_games[listOfGames[i]][key]);
        });
  
      }))
    })
    }
})

describe('Перевірка на якому проєкті які нові ігри відсутні', function() {
  it('test', function() {
    cy.writeFile('MissingGames.json', {});

    cy.readFile('SavedList.json').then((json) => {
      for(let i = 0; i < listOfGames.length; i++) {
        for(let j = 1 + i; j < listOfGames.length; j++){
          //cy.log(`${listOfGames[i]} and ${listOfGames[j]}`)

          const first = json.new_games[listOfGames[i]];
          const second = json.new_games[listOfGames[j]];

          if(first.length > second.length) {
            cy.log(`${listOfGames[i]} and ${listOfGames[j]} are NOT equal`);
            
            const missingValues = first.filter((value) => !second.includes(value));

            cy.readFile('MissingGames.json').then((existingData) => {
              const newData = {
               [`Games_in_${listOfGames[i]}_not_${listOfGames[j]}`]: missingValues
              };
              const mergedJson = {
                ...existingData,
                ...newData
              };
      
              cy.writeFile('MissingGames.json', mergedJson);
            });

          } 
          else if (first.length == second.length) {
            cy.log(`${listOfGames[i]} and ${listOfGames[j]} are equal`);
          } 
          else {
            cy.log(`${listOfGames[j]} and ${listOfGames[i]} are NOT equal`);
            const missingValues = second.filter((value) => !first.includes(value));
            cy.readFile('MissingGames.json').then((existingData) => {
              const newData = {
               [`Games_in_${listOfGames[j]}_not_${listOfGames[i]}`]: missingValues
              };
              const mergedJson = {
                ...existingData,
                ...newData
              };
      
              cy.writeFile('MissingGames.json', mergedJson);
            });
          }
        }
      }
    });
  })
  
})
//

/*
describe.skip("Порівняння популярних ігор не враховуючи порядку", function() {
  for (let i = 0; i < listOfGames.length; i++) {
    it(`Comapare ${listOfGames[1]} and ${listOfGames[i]}`, function() {
      cy.readFile('SavedList.json').then((games => {
  

        const sortedJson = games.popular[listOfGames[1]].sort((a, b) => {
          return a.localeCompare(b);
        });
  
        const sortedJson2 = games.popular[listOfGames[i]].sort((a, b) => {
          return a.localeCompare(b);
        });
        
        cy.wrap(games.popular[listOfGames[1]]).each((value, key) => {
          expect(value).to.deep.equal(games.popular[listOfGames[i]][key]);
        });

        cy.writeFile('testjson.json', {Sho: games.popular[listOfGames[1]]}); 
        
        /*cy.wrap(games.popular[listOfGames[0]]).each((value, key) => {
          expect(value).to.deep.equal(games.popular[listOfGames[i]][key]);
        });
  
      }))
    })
    }
})
*/