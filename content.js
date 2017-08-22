function attachLinks(messageView) {
  messageView.getMessageIDAsync().then(function (id) {
    var url = window.location.origin.replace('inbox', 'mail') + '/mail' + window.location.pathname + '#all/' + id;

    // TODO: or https://mail.google.com/mail/h/ouilk5cfmn2l/?th=MESSAGE_ID&v=c ?
    var threadView = messageView.getThreadView();
    var div = document.createElement('div');

    var link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.innerHTML = 'Permalink to this email';
    div.style = 'text-align: center;';
    div.appendChild(link);

    d3.select(d3.select('div.hJ').node().parentNode)
      .insert('div', 'div.hJ + *')
      .append('a')
      .attr('href', url)
      .attr('target', '_blank')
      .text('open in gmail');
  });
}

InboxSDK.load('2', 'sdk_inbox-permalink_77495e9cd5').then(function(sdk){
	sdk.Conversations.registerMessageViewHandler(attachLinks);
});
