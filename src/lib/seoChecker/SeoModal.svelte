<script>
  export let title;
  export let domain;

  export let open = false;
</script>

{#if open}
  <div class="modal">
    <div
      id="so-widget-modal-overlay"
      style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6);"
    >
      <div
        id="so-widget-modal-content"
        style="position:relative; width:80%; max-width: 1250px; height:80%; margin:120px auto 0; background:#fff;"
      >
        <div
          style="width:100%; height:50px; position:absolute; top:-50px; background:white;"
        >
          <span
            id="so-widget-modal-title"
            style="position:absolute; left:15px; top:15px; font-size:16px; font-weight:bold;"
          >
            {title}
            {domain}
          </span>
          <span
            on:click={() => (open = false)}
            style="display:inline-block; width:16px; height:16px; position:absolute; top:15px; right:15px; cursor:pointer; background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAowAAAKMB8MeazgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAB5SURBVDiNrZPRCcAwCEQfnUiySAZuF8kSWeH6Yz8KrQZMQAicJ+epAB0YwAmYJKIADLic0/GPPCbQAnLznCd/4NWUFfkgy1VjH8CryA95ApYltAiTRCZxpuoW+gz9WXE6NPeg+ra1UDIxGlWEObe4SGxY5fIxlc75Bkt9V4JS7KWJAAAAAElFTkSuQmCC59ef34356faa7edebc7ed5432ddb673d'); opacity:0.6;"
          />
        </div>
        <div id="iframe-wrapper">
          <iframe
            name="so-iframe"
            id="so-iframe"
            scrolling="yes"
            style="border:1px solid transparent; width:100%; height:100%; box-sizing:border-box;"
            title="{title} {domain}"
          />
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999999;
  }

  @media (max-width: 500px) {
    #so-widget-modal-content {
      width: 100% !important;
      height: 100% !important;
      margin-top: 50px !important;
    }
  }
  @media (max-width: 500px) and (max-height: 550px) {
    #so-widget-modal-content {
      height: 100% !important;
    }
  }
  @media (min-height: 601px) and (max-height: 750px) and (min-width: 501px) {
    #so-widget-modal-content {
      margin-top: 100px !important;
    }
  }
  @media (max-height: 600px) and (min-width: 501px) {
    #so-widget-modal-content {
      margin-top: 80px !important;
    }
  }
  #iframe-wrapper {
    width: 100%;
    height: 100%;
    -webkit-overflow-scrolling: touch !important;
  }
  #iframe-wrapper iframe {
    height: 100%;
    width: 100%;
  }
</style>
