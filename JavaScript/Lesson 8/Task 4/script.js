function Article(){
  this.created = new Date;

  Article.count++;   //increase the counter on each call
  Article.last = this.created  //memorise the date
}

Article.count = 0;
Article.showStats = function(){
  alert("Всего" + this.count + ", последняя: " +this.last);
};

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)