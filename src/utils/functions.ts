class utilsFunc {
  translateContent(title: any) {
    let num = 150 / 3;

    if (typeof title === "string" || title instanceof String) {
      if (title.length > 30) {
        return title.replaceAll("\n", " ").substring(0, num).trim() + "...";
      }
    }

    return title;
  }

  translateTitle(title: string) {
    let ref = 11;
    
    if(typeof title === 'string') {
      let newTitle: any = ''
      newTitle = title.split(" ", ref);
      newTitle = newTitle.join(" ");
      
      return newTitle;
    }

    return title
  }

  translatePrice(price: any) {
    return price ? price.split(",", 1) : price;
  }

  translateBold(text: any) {
    return `${text
      .replace("*", '<span className="font-semibold text-stone-500">')
      .replace("*", "</span>")}`;
  }
}

export default new utilsFunc();
