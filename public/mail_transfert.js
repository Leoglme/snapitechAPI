function transfertMail(username, email, message) {
    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="fr">
  
  <head>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <meta name="viewport" content="width=device-width">


    <style type="text/css">
      @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500);
      
     
        
:root { color-scheme: light dark; supported-color-schemes: light dark;} @media (prefers-color-scheme: dark) { /* Custom Dark Mode Background Color */ .darkmode {background-color: #F4A100 !important;} .DMBG02 {background-color: #D65C04 !important;} /* Custom Dark Mode Font Colors */ h1, h2, h3, h4 {color: #A9001E !important;} p, span, b, p > a {color: #111111 !important;} a {color: #FEFEFE !important;} h5, h5 > a {color: #FFF9BD !important;} }
  
      /* /\\/\\/\\/\\/\\/\\/\\/\\/ CLIENT-SPECIFIC STYLES /\\/\\/\\/\\/\\/\\/\\/\\/ */
      #outlook a{padding:0;} /* Force Outlook to provide a "view in browser" message */
      .ReadMsgBody{width:100%;} .ExternalClass{width:100%;} /* Force Hotmail to display emails at full width */
      .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;} /* Force Hotmail to display normal line spacing */
      body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;} /* Prevent WebKit and Windows mobile changing default text sizes */
      table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;} /* Remove spacing between tables in Outlook 2007 and up */
      img{-ms-interpolation-mode:bicubic;} /* Allow smoother rendering of resized image in Internet Explorer */
      /* /\\/\\/\\/\\/\\/\\/\\/\\/ RESET STYLES /\\/\\/\\/\\/\\/\\/\\/\\/ */
      body{margin:0; padding:0;}
      img{border:0; height:auto; line-height:100%; outline:none; text-decoration:none;}
      body, #bodyTable, #bodyCell{height:100% !important; margin:0; padding:0; width:100% !important;}
      table {border-collapse: collapse;}
      img {display:block;}
      .appleLinks a {color: #8A959E !important; text-decoration: none;}
      span.preheader { display: none !important; }
    </style>
    <style type="text/css" id="hs-inline-css">
      .preheader, span[summary="preheader"]{ display: none !important; width: 0 !important; height: 0 !important; visibility: hidden !important; min-width: 0 !important; min-height: 0 !important; font-size: 0 !important; line-height: 0 !important; }
        .outer-table {width: 100%; max-width: 640px;}
        .inner-table {width: 93.75%; max-width: 600px;}
        .main-content {width: 66.67%; max-width: 400px;}
        .alt-content {width: 73.34%; max-width: 440px;}
        
        
        
        
        
        
        
        
        
        
        body { font-family: 'Roboto', -apple-system, BlinkMacSystemFont, Helvetica,Arial,sans-serif; color: #8A959E; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Roboto', -apple-system, BlinkMacSystemFont, Helvetica,Arial,sans-serif; font-weight: 200; margin:0 auto;}
        h1 { font-size: 40px; color: #1F2532; letter-spacing: 0; }
        h2.subheader-below { font-size: 18px; line-height: 30px; color: #8A959E; }
        h3 { font-size: 12px; color: #8A959E; letter-spacing: 1px; text-transform: uppercase; }
            
        p { font-family: 'Roboto', -apple-system, BlinkMacSystemFont, Helvetica,Arial,sans-serif; font-weight: 300; margin: 0 0 1em 0; font-size: 18px; color: #8A959E; letter-spacing: 0; line-height: 38px; }
        .main-content a { color: #FF3366 !important; }
        .main-content a:hover { color: #bb2b42  !important; }
        
        .view-in-browser { font-size: 11px; color: #8A959E; letter-spacing: 0; border-bottom: 1px solid #B9C0C4; text-decoration: none;}        
        
        img + div { display:none; }
    </style>
    <style type="text/css" id="no-inline-css">
      @media screen and (max-width:9999px){
          .main-cta:hover,* [summary="main-cta"]:hover {background-color: #bb2b42  !important; box-shadow: 0px 20px 40px -10px rgba(0,0,0,0.2) !important; -webkit-box-shadow: 0px 20px 40px -10px rgba(0,0,0,0.2) !important;}
          .discord:hover img,* [summary="twitter"]:hover img {background-color: #738adb !important; box-shadow: 0px 20px 40px -10px rgba(0,0,0,0.2) !important; -webkit-box-shadow: 0px 20px 40px -10px rgba(0,0,0,0.2) !important;}
          .github:hover img,* [summary="facebook"]:hover img {background-color: #303030 !important; box-shadow: 0px 20px 40px -10px rgba(0,0,0,0.2) !important; -webkit-box-shadow: 0px 20px 40px -10px rgba(0,0,0,0.2) !important;}
          .web:hover img,* [summary="linkedin"]:hover img {background-color: #d3334d  !important; box-shadow: 0px 20px 40px -10px rgba(0,0,0,0.2) !important; -webkit-box-shadow: 0px 20px 40px -10px rgba(0,0,0,0.2) !important;}
      }
     @media only screen and (max-width: 480px){
        /* /\\/\\/\\/\\/\\/\\/ CLIENT-SPECIFIC MOBILE STYLES /\\/\\/\\/\\/\\/\\/ */
        body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:none !important;} /* Prevent Webkit platforms from changing default text sizes */
        body{width:100% !important; min-width:100% !important;} /* Prevent iOS Mail from adding padding to the body */
        .main-content, .author-content{width: 85% !important;}
      }
    </style>
  </head>
  <!--[if !((gte mso 9)|(IE))]>
    <!-->
    
    <body bgcolor="#eaeced" style="font-family:'Roboto', -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif; color:#8a959e"><span class="preheader" summary="preheader" style="display:none !important; Margin-left:-9999 !important; width:0 !important; height:0 !important; visibility:hidden !important; min-width:0 !important; min-height:0 !important; font-size:0 !important; line-height:0 !important"
      width="0 !important" height="0 !important"><em style="text-transform: capitalize"> ${username.capitalize()}</em> vous à envoyée un message depuis dibodev.com.<br></span>
    <!--<![endif]-->
    <table id="body" class="body" summary="body" width="100%" height="100%" align="center"
    border="0" cellspacing="0" cellpadding="0" style="background-color:#fafafa;">
      <tbody>
        <tr>
          <td align="center" valign="top">
                  <table class="outer-table" summary="outer-table" align="center" valign="top" border="0"
                  cellpadding="0" cellspacing="0" style="width:100%; max-width:640px; Margin:0 auto"
                  width="100%">
                    <tbody>
                      <tr>
                        <td>
                          <table class="inner-table" summary="inner-table" align="center" valign="top" border="0"
                          cellpadding="0" cellspacing="0" style="width:93.75%; max-width:600px; Margin:0 auto; height:120px"
                          height="120" width="93.75%">
                            <tbody>
                              <tr height="25">
                                <td style="font-size:0; line-height:0;">&nbsp;</td>
                              </tr>
                              <tr>
                                
                              
                           </tr>
                              <tr height="15">
                                <td style="font-size:0; line-height:0;">&nbsp;</td>
                              </tr>
                              <tr height="40">
                                <td align="center" valign="middle">
                                  <a href="https://dibodev.com"
                                  data-hs-link-id="0" target="_blank">
                                    <img src="https://dibodev.com/assets/images/dibodev-developpeur-rennes-blue.png"
                                    width="60" height="auto" style="border:0;width:60px;height:auto;">
                                </a>
                                </td>
                              </tr>
                              <tr height="50">
                                <td style="font-size:0; line-height:0;">&nbsp;</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                     
                     <tr>
                        <td align="center" style="top: 65px; background: url('https://dibodev.com/assets/images/bg_mail-red.png');">
                          <a href="https://dibodev.com"
                          target="_blank" data-hs-link-id="0">
                            <img class="hero-image" src="https://dibodev.com/assets/images/about-avatar.png"
                            width="640" style="display: block; box-shadow:0 20px 40px -10px rgba(0, 0, 0, 0.15) !important; 
                            -webkit-box-shadow:0 20px 40px -10px rgba(0, 0, 0, 0.15) 
                            !important; width: 100%; max-width: 200px;">
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table class="inner-table" summary="inner-table" align="center" bgcolor="#ffffff"
                          valign="top" border="0" cellpadding="0" cellspacing="0" style="width:93.75%; max-width:600px; Margin:0 auto;"
                          width="93.75%">
                          
                         </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table class="inner-table" summary="inner-table" align="center" bgcolor="#ffffff"
                          valign="top" border="0" cellpadding="0" cellspacing="0" style="width:93.75%; max-width:600px; Margin:0 auto"
                          width="93.75%">
                            <tbody>
                              <tr>
                                <td>
                                  <table class="main-content" summary="main-content" align="center" valign="top"
                                  border="0" cellpadding="0" cellspacing="0" style="width:66.67%; max-width:400px; Margin:0 auto"
                                  width="66.67%">
                                    <tbody>
                       
                                      <tr height="50">
                                        <td>&nbsp;</td>
                                      </tr>
                                      <tr>
                                        <td align="center">
                                          <h1 style="font-family:'Roboto', -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif; 
                                          font-weight:200; margin:0 auto; font-size:40px; color:#1f2532; letter-spacing:0; 
                                          text-transform: capitalize; word-break: break-word;">Message de ${username}</h1>
                                        </td>
                                      </tr>
                                      <tr height="40">
                                        <td>&nbsp;</td>
                                      </tr>
                                      <tr>
                                        <td align="center">
                                          <img src="https://get.invisionapp.com/hs-fs/hubfs/email/common/pink-hr.png?noresize&amp;t=1510609612837&amp;width=60&amp;height=1&amp;name=pink-hr.png"
                                          height="1" width="60">
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table class="inner-table" summary="inner-table" align="center" bgcolor="#ffffff"
                          valign="top" border="0" cellpadding="0" cellspacing="0" style="width:93.75%; max-width:600px; Margin:0 auto"
                          width="93.75%">
                            <tbody>
                              <tr>
                                <td>
                                  <table class="main-content" summary="main-content" align="center" valign="top"
                                  border="0" cellpadding="0" cellspacing="0" style="width:66.67%; max-width:400px; Margin:0 auto"
                                  width="66.67%">
                                    <tbody>
                                      <tr height="50">
                                        <td>&nbsp;</td>
                                      </tr>
                                      <tr>
                                        <td align="center">
                                          <p style="font-family:'Roboto', -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif; 
                                          font-weight:300; margin:0 0 1em 0; font-size:18px; color:#8a959e; letter-spacing:0;
                                           line-height:38px"><em style="text-transform: capitalize"> ${username.capitalize()}</em> à envoyé un message depuis dibodev.com.</p>
                                          <p
                                          style="font-family:'Roboto', -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif; 
                                          font-weight:300; margin:0 0 1em 0; font-size:18px; color:#8a959e; 
                                          letter-spacing:0; line-height:38px">
                                          nom : ${username.capitalize()}<br>mail: ${email}<br>message: ${message}</p>
                                        </td>
                                      </tr>
                                      <tr height="50">
                                        <td>&nbsp;</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table class="inner-table" summary="inner-table" align="center" bgcolor="#ffffff"
                          valign="top" border="0" cellpadding="0" cellspacing="0" style="width:93.75%; max-width:600px; Margin:0 auto"
                          width="93.75%">
                            <tbody>
                              <tr>
                                <td>
                                  <table class="main-content" summary="main-content" align="center" valign="top"
                                  border="0" cellpadding="0" cellspacing="0" style="width:66.67%; max-width:400px; Margin:0 auto"
                                  width="66.67%">
                                    <tbody>
                                      <tr height="50">
                                        <td>&nbsp;</td>
                                      </tr>
                                      <tr>
                                        <td align="center">
                                          <div>
                                            <!--[if mso]>
                                              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"
                                              href="https://projects.invisionapp.com/d/main?createProjectModal=true#/projects"
                                              style="height:40px;v-text-anchor:middle;width:300px;" arcsize="50%" stroke="f"
                                              fillcolor="#FF3366">
                                                <w:anchorlock/>
                                                <center>
                                                <![endif]-->
                                                <a class="main-cta" summary="main-cta" href="mailto:${email}"
                                                style="background-color:#d3334d; padding:14px 68px 14px 68px; border-radius:35px; color:#ffffff !important; display:inline-block; 
                                                font-family:'Roboto',Helvetica,Arial,sans-serif; font-weight:500; font-size:14px;
                                                letter-spacing:1px; line-height:22px !important; text-transform:capitalize; text-align:center; 
                                                text-decoration:none; -webkit-text-size-adjust:none;"
                                                bgcolor="#d3334d" align="center" data-hs-link-id="1" target="_blank">Répondre</a>

                                                <!--[if mso]>
                                                </center>
                                              </v:roundrect>
                                            <![endif]-->
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                           
                           </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table class="inner-table" summary="inner-table" align="center" bgcolor="#ffffff"
                          valign="top" border="0" cellpadding="0" cellspacing="0" style="width:93.75%; max-width:600px; Margin:0 auto"
                          width="93.75%">
                            <tbody>
                              <tr height="60">
                                <td>&nbsp;</td>
                              </tr>
                              <tr>
                                <td align="center">
                                  <img src="https://get.invisionapp.com/hs-fs/hubfs/email/common/grey-vert-hr.png?noresize&amp;t=1510609612837&amp;width=1&amp;height=50&amp;name=grey-vert-hr.png"
                                  height="50" width="1">
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          <img src="https://get.invisionapp.com/hs-fs/hubfs/email/common/grey-vert-hr.png?noresize&amp;t=1510609612837&amp;width=1&amp;height=50&amp;name=grey-vert-hr.png"
                          height="50" width="1">
                        </td>
                      </tr>
                      <tr height="60">
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td align="center"><span style="font-family: 'Roboto', -apple-system, BlinkMacSystemFont, Helvetica,Arial,sans-serif; 
                        font-weight: 300; font-size: 11px;color: #8A959E;letter-spacing: 1px;">ME RETROUVER SUR</span>
                        </td>
                      </tr>
                      <tr height="30">
                        <td style="font-size:0; line-height:0;">&nbsp;</td>
                      </tr>
                      <tr>
                        <td>
                          <table class="social-table" summary="social-table" align="center" valign="middle"
                          border="0" cellpadding="0" cellspacing="0" style="width:240px;max-width:100%;Margin:0 auto;">
                            <tbody>
                              <tr>
                                <td width="60">
                                  <a class="discord" href="https://discordapp.com/users/466757841001250818"
                                  data-hs-link-id="0" target="_blank">
                                
                                     <img src="https://dibodev.com/assets/images/discord.png"
                                      width="60" height="60" bgcolor="#B9C0C4" style="background-color: #B9C0C4; border-radius:30px;" alt="logo discord">
                                    
                                  </a>
                                </td>
                                <td width="30">&nbsp;</td>
                                <td width="60">
                                <a class="github" href="https://github.com/Leoglme"
                                  data-hs-link-id="0" target="_blank">
                              
                                 <img src="https://dibodev.com/assets/images/github.png"
                                      width="58" height="58" bgcolor="#B9C0C4" style="background-color: #B9C0C4; 
                                      border-radius:30px;" alt="logo github" 
                                    
                               
                                 </a>
                                </td>
                                <td width="30">&nbsp;</td>
                                <td width="60">
                                 <a class="web" href="https://dibodev.com"
                                  data-hs-link-id="0" target="_blank">
                               <img src="https://dibodev.com/assets/images/web.png"
                                      width="60" height="60" bgcolor="#B9C0C4" style="background-color: #B9C0C4; border-radius:30px;" alt="logo dibodev website">
                                   
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr height="60">
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td>
                          <table class="inner-table" summary="inner-table" align="center" valign="top" border="0"
                          cellpadding="0" cellspacing="0" style="width:93.75%; max-width:600px; Margin:0 auto; border:solid 1px #D2D3D4"
                          width="93.75%">
                            <tbody>
                              <tr>
                                <td>
                                  <table class="alt-content" summary="alt-content" align="center" valign="top" border="0"
                                  cellpadding="0" cellspacing="0" style="width:73.34%; max-width:440px; Margin:0 auto"
                                  width="73.34%">
                                    <tbody>
                                      <tr height="60">
                                        <td style="font-size:0; line-height:0;">&nbsp;</td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top">
                                          <a href="https://dibodev.com"
                                          data-hs-link-id="1" target="_blank">
                                            <img src="https://dibodev.com/assets/images/dibodev-developpeur-rennes-blue.png"
                                            width="30" height="30" alt="InVision" style="border:0; width:30px;height:30px;">
                                          </a>
                                        </td>
                                      </tr>
                                      <tr height="35">
                                        <td style="font-size:0; line-height:0;">&nbsp;</td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="font-family: 'Roboto', -apple-system, BlinkMacSystemFont, Helvetica,Arial,sans-serif; font-weight: 200; color:#1F2532;font-size:22px;letter-spacing:0;">Dibodev | Développeur web à Rennes</td>
                                      </tr>
                                      <tr height="10">
                                        <td style="font-size:0; line-height:0;">&nbsp;</td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="font-family: 'Roboto', -apple-system, BlinkMacSystemFont, Helvetica,Arial,sans-serif; font-weight: 300; color:#1F2532;font-size:12px;letter-spacing:0;"><em>Développement web, création ou refonte de site internet.</em>
                                        </td>
                                      </tr>
                                      <tr height="30">
                                        <td style="font-size:0; line-height:0;">&nbsp;</td>
                                      </tr>
                                      <tr>
                                        <td valign="top" align="center" style="font-family: 'Roboto', -apple-system, BlinkMacSystemFont, Helvetica,Arial,sans-serif; font-weight: 300; color:#8A959E;font-size:12px;letter-spacing:0;"><span class="appleLinks">contact@dibodev.com</span>
                                        </td>
                                      </tr>
                                      <tr height="20">
                                        <td style="font-size:0; line-height:0;">&nbsp;</td>
                                      </tr>
                                   
                                      <tr height="60">
                                        <td style="font-size:0; line-height:0;">&nbsp;</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr height="185">
                        <td>&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <!--[if mso]>
                  </td>
                  <td style="padding:0px;margin:0px;">&nbsp;</td>
                </tr>
              </table>
            <![endif]-->
            <!-- END LIQUID WRAPPER -->
          </td>
        </tr>
        <!-- start coded_template: id:4268246371 path:custom/page/macros/gmail-mobile-fix-as-TR.html
        -->
        <tr>
          <td>
            <div style="display:none; white-space:nowrap; font:15px courier; line-height:0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
          </td>
        </tr>
     
      </tbody>
    </table>
  
   
  <div id="_hs"></div>
    </body>

</html>
`
}

exports.render = transfertMail;
