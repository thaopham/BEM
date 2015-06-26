({
    block: 'page',
    title: 'Practice BEM tool',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '_practice.css' }
    ],
    scripts: [{ elem: 'js', url: '_practice.js' }],
    mods : { theme : 'islands' },
    content: [
       {
           tag: 'header',
           content: {
              block: 'header',
              content: [
              {
               block: 'logo',
               content: 
                {
                  tag: 'h1',
                  content: 
                    {
                        block : 'link',
                        mods : { theme : 'islands', size : 'xl' },
                        url : 'https://bem.info/',
                        content : 'Logo'
                    }
                }
              },
              { block: 'nav', nav: ['Tab 1','Tab 2','Tab 3'] },              
              { block: 'auth', 
                content: [
                  {
                      block : 'input',
                      mods : { theme : 'islands', size : 'm' },
                      placeholder : 'Enter your name'
                  },
                  ' ', 
                  {
                      block : 'input',
                      mods : { theme : 'islands', size: 'm', type : 'password' },
                      placeholder : 'Enter the password'
                  },
                  ' ', 
                  {
                      block : 'button',
                      mods : { theme : 'islands', size : 'm' },
                      text : 'Sign In'
                  },
                  { tag : 'br' },
                  { tag : 'br' }
                ]
              }
            ]
           }           
       },
       {
           tag: 'content',
           content: {
              block: 'content',
              content: [
                { tag : 'h2', content : 'islands theme' },
                { tag : 'br' },
                {
                    block : 'line',
                    mods : { size : 's' },
                    content : [
                        'size s (24px height) ',
                        {
                            block : 'input',
                            mods : { theme : 'islands', size : 's', 'has-clear' : true },
                            val : 'value',
                            placeholder : 'placeholder'
                        },
                        ' ',
                        {
                            block : 'button',
                            mods : { theme : 'islands', size : 's' },
                            text : 'button'
                        },
                        ' ',
                        {
                            block : 'button',
                            mods : { theme : 'islands', size : 's' },
                            text : 'button',
                            icon : { block : 'icon', mods : { action : 'download' } }
                        },
                        ' ',
                        {
                            block : 'button',
                            mods : { theme : 'islands', size : 's' },
                            icon : { block : 'spin', mods : { theme : 'islands', size : 'xs', visible : true } },
                            text : 'Loading...'
                        },
                        ' ',
                        {
                            block : 'radio-group',
                            mods : { theme : 'islands', size : 's', type : 'button' },
                            name : 'radio-sizes-s',
                            options : [
                                { val : 1, text : 'first' },
                                { val : 2, text : 'second', checked : true }
                            ]
                        },
                        ' ',
                        {
                            block : 'checkbox',
                            mods : { theme : 'islands', size : 's', type : 'button' },
                            val : 1,
                            text : 'check'
                        },
                        ' ',
                        {
                            block : 'dropdown',
                            mods : { switcher : 'button', theme : 'islands', size : 's' },
                            switcher : 'dropdown',
                            popup : { block : 'popup', mods : { theme : 'islands' }, content : 'popup' }
                        },
                        ' ',
                        {
                            block : 'select',
                            mods : { mode : 'radio-check', theme : 'islands', size : 's' },
                            name : 'select',
                            text : 'first',
                            options : [
                                { val : 1, text : 'first', checked: true },
                                { val : 2, text : 'second' }
                            ]
                        },
                        ' ',
                        {
                            block : 'spin',
                            mods : { theme : 'islands', size : 's', visible : true }
                        }
                    ]
                },
                { tag : 'br' },
                { tag: 'h4', content: 'Component' },
                {
                    block : 'attach',
                    mods : { theme : 'islands', size : 'm', focused : true },
                    button : 'Select file',
                    noFileText : 'No file selected'
                },
                { tag : 'br' },
                { tag : 'br' },
                {
                    block : 'button',
                    mods : { theme : 'islands', size : 'm', type : 'link' },
                    url : 'https://bem.info/',
                    text : 'Try BEM!'
                },
                { tag : 'br' },
                { tag : 'br' },
                {
                    block : 'checkbox',
                    mods : { theme : 'islands', size : 'm', checked : true },
                    name: 'name1',
                    val : 'val_1',
                    text : 'Candies'
                },
                ' ',
                {
                    block : 'checkbox',
                    mods : { theme : 'islands', size : 'm', checked : false },
                    name: 'name1',
                    val : 'val_1',
                    text : 'Cakes'
                },
                ' ',
                {
                    block : 'checkbox-group',
                    mods : { theme : 'islands', size : 'm', type : 'button' },
                    name : 'checkbox-button',
                    options : [
                        { val : 1, text : 'Block' },
                        { val : 2, text : 'Element' },
                        { val : 3, text : 'Modifier' }
                    ]
                },
                { tag : 'br' },
                { tag : 'br' },
                {
                    block : 'control-group',
                    content : [
                        {
                            block : 'input',
                            mods : { theme : 'islands', size : 'm', type : 'search' },
                            placeholder : 'Enter your question'
                        },
                        {
                            block : 'button',
                            mods : { theme : 'islands', size : 'm' },
                            text : 'Search'
                        }
                    ]
                },
                { tag : 'br' },
                { tag : 'br' },
                {
                    block : 'control-group',
                    content : [
                        {
                            block : 'input',
                            mods : { theme : 'islands', size : 'm' },
                            placeholder : 'Price from'
                        },
                        {
                            block : 'input',
                            mods : { theme : 'islands', size : 'm' },
                            placeholder : 'to'
                        },
                        {
                            block : 'select',
                            mods : { mode : 'radio', theme : 'islands', size : 'm' },
                            val: 'usd',
                            options : [
                                { val : 'usd', text : '$' },
                                { val : 'euro', text : '€' }
                            ]
                        }
                    ]
                },
                { tag : 'br' },
                { tag : 'br' },
                {
                    block : 'image',
                    url : 'https://img-fotki.yandex.ru/get/16159/259818507.0/0_130be6_4116d8e7_S',
                    title : 'Find detailed description on bem.info'
                },
                { tag : 'br' },
                { tag : 'br' },
                {
                    block : 'link',
                    mods : { theme : 'islands', size : 'm' },
                    url : 'https://bem.info/',
                    content : 'bem.info',
                    target : '_blank'
                },
                { tag : 'br' },
                { tag : 'br' },
                {
                    block : 'progressbar',
                    mods : { theme : 'islands' },
                    val : 25
                },
                { tag : 'br' },
                { tag : 'br' },
                {
                    block : 'radio-group',
                    mods : { theme : 'islands', size : 'm', type : 'line' },
                    name : 'radio-line',
                    options : [
                        { val : 1, text : 'Football' },
                        { val : 2, text : 'Basketball' },
                        { val : 3, text : 'Handball' }
                    ]
                },
                { tag : 'br' },
                { tag : 'br' },
                {
                    block : 'select',
                    mods : { mode : 'radio', theme : 'islands', size : 'm' },
                    name : 'select2',
                    val : 2,
                    options : [
                        { val : 1, text : 'Report' },
                        { val : 2, text : 'Workshop' },
                        { val : 3, text : 'Round-table conference' }
                    ]
                },
                { tag : 'br' },
                { tag : 'br' },
                {
                    block : 'textarea',
                    mods : { theme : 'islands', size: 'm' },
                    placeholder : 'Your text should be here'
                }
              ]
           }
       },
       {
           tag: 'footer',
           content: [
            {
             block: 'footer',
             content: [
                  { elem: 'item',
                    content: {
                      block : 'link',
                      mods : { theme : 'islands', size : 'm' , focused : true },
                      url : 'https://bem.info/',
                      content : 'Tab 1'
                    } 
                  },
                  { elem: 'item',
                    content: {
                      block : 'link',
                      mods : { theme : 'islands', size : 'm' , focused : true },
                      url : 'https://bem.info/',
                      content : 'Tab 2'
                    } 
                  },
                  { elem: 'item',
                    content: {
                      block : 'link',
                      mods : { theme : 'islands', size : 'm' , focused : true },
                      url : 'https://bem.info/',
                      content : 'Tab 3'
                    } 
                  }
              ]
            },
            { block: 'copyright', content: 'Copyright © 2015 BEM' }
           ]
       }
    ]
})