module.exports={
    HTML:function(title,list,body,control){
        return `
        <!doctype html>
        <html>
        <head>
          <title>${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h2>${title}</h2>
          ${list}
          ${control}
          ${body}
        </body>
        </html>
        
        
        `
    },
    list:function(tables){
        var i=0;
        var tag='<ul>';
        while(i<tables.length){
            tag+=`<li><a href='/?id=${tables[i].Tables_in_homework1}'>${tables[i].Tables_in_homework1}</a></li>`
            i++;
        }
        tag+="</ul>"
        return `
        
        ${tag}
        `


    }
    
}