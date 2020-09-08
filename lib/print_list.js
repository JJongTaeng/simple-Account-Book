let print_list= {
  result: '',
  exp: '지출',
  inc: '수입',
  judgeExpand: function(expand) {
    if(expand == 1){
      this.result = this.exp;
    }
    else this.result = this.inc;
  },
  all_list: function(all_data) {
    let list = `<table class="menu-table">`;
    let k=0;
    
    list = list + `
    <tr class="menu-tr">
      <th class="menu-th">날짜</th>
      <th class="menu-th">수입/지출</th>
      <th class="menu-th">가격</th>
      <th class="menu-th">비고</th>
    </tr>
    `
    while(k<all_data.length){
      this.judgeExpand(all_data[k].expand);
      list += `
      <tr class="menu-tr">
        <td class="menu-td">${all_data[k].input_date}</td>
        <td class="menu-td">${this.result}</td>
        <td class="menu-td">${all_data[k].price}</td>
        <td class="menu-td">${all_data[k].contents}</td>
      </tr>`
      k++;
    }
    list += `</table>`
    return list;
  },
  left_list: function(all_data) {

    let i =0;
    let list = '';
    while(i<all_data.length){

      list += `<div style="display: flex; align-items: center;">
      <span class="left-span" id='${all_data[i].expand}'></span><li class="left-item">${all_data[i].input_date} ${all_data[i].price}원</li></div>
      `
      i=i+1;
    }

    return list;
  }
}

module.exports = print_list;