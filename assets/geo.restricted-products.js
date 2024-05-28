(function(RestrictedCountries, $) {
    "use strict";

    var restriction = {};
    var restrictions = [];
  
    var setCountryCookie = function(country) {
      var storeDomain = ".xtend-life.com";
      $.cookie("user-location", country, {
        expires: 1,
        path: "/",
        domain: storeDomain
      });
    };
  
    var setOverrideCookie = function() {
      var storeDomain = ".xtend-life.com";
      $.cookie("disable-restricted-countries", true, {
        expires: 999,
        path: "/",
        domain: storeDomain
      });
    };

    var setIpCookie = function(ip, country) {
        var storeDomain = ".xtend-life.com";
        $.cookie("ip-address", ip, {
          expires: 1,
          path: "/",
          domain: storeDomain
        });
      };
  
    var getQueryParams = function(qs) {
      qs = qs || document.location.search;
  
      if (!qs) { 
        return;
      }
  
      qs = qs.split('+').join(' ');
  
      var params = {},
          tokens,
          re = /[?&]?([^=]+)=([^&]*)/g;
  
      while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
      }
  
      return params;
    };

    var isBot = function()
    {
        var botPattern = "(Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|libwww-perl|httpunit|nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|YandexBot|YandexImages|YandexAccessibilityBot|YandexMobileBot|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|TurnitinBot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|seznambot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest.com.bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|pingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb.iss.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot.AraTurka.com|bot-pge.chlooe.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|Seekport Crawler|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider.com|GroupHigh\/|theoldreader.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica)";
        var re = new RegExp(botPattern, 'i');
        var isCrawler = re.test(navigator.userAgent);
        return isCrawler;
    }

    var getRestrictionData = function()
    {
        var queryParams = getQueryParams();
          if (queryParams && queryParams.restrict == 'false') {
            setOverrideCookie();
          }
          
          var data = {
              country: $.cookie("user-location"),
              disabled: $.cookie("disable-restricted-countries")
          }
          if(!data.country)
          {
              data.country = getGeoCountry();
          }
          return data;
    }

    var getGeoCountry = function()
    {
        if (typeof geoip2 !== "object") {
            console.error("GeoIP not available");
            return;
          }
  
          geoip2.country(
            function(location) {
              if (!location.country.iso_code) {
                console.error("No country code provided");
                return null;
              }
  
              setIpCookie(location.traits.ip_address, location.country.iso_code);
              setCountryCookie(location.country.iso_code);
              return location.country.iso_code;
            },
            function(error) {
              console.error(error);
              return null;
            }
          );
    }

    var addRestriction = function(country, redirect)
    {
        var newRestriction = 
        {
            country : country,
            redirect: redirect
        }
        restrictions.push(newRestriction);
        console.log("Restriction added", newRestriction);
    }
  
    var product_init = function() {
        
      console.log("Restricted country data:", restrictions);

      if (navigator && navigator.userAgent) {
        console.log("Not a bot");
        var isCrawler = isBot();
  
        if (!isCrawler) {
            var data = getRestrictionData();
  
          if (data.disabled == 'true') {
            // Restriction is disabled with URL param
            console.log("Restricted country disabled");
            return;
          }
  
          if (data.country) {
            console.log("Country is", data.country);
            for (let index = 0; index < restrictions.length; ++index) {
                var restriction = restrictions[index];
                if(data.country.toLowerCase() === restriction.country)
                {                    
                    window.location = restriction.redirect;
                    return;
                }
            }
            console.log("Country not restricted");
            return;
          } 
        }
      }
    };
  
    var collection_init = function() {
        console.log("Restricted country data:", restrictions);

      if (navigator && navigator.userAgent) {
            console.log("Not a bot");
            var isCrawler = isBot();
    
            if (!isCrawler) {
                var data = getRestrictionData();
    
                if (data.disabled == 'true') {
                    // Restriction is disabled with URL param
                    console.log("Restricted country disabled");
                    return;
                }

                if (data.country) {
                    console.log("Country is", data.country);
                    for (let index = 0; index < restrictions.length; ++index) {
                        var restriction = restrictions[index];
                        if(data.country.toLowerCase() === restriction.country.toLowerCase())
                        {                    
                            $('[data-restrict-country*="'+restriction.country.toLowerCase()+'"]').hide();
                            console.log("Country restricted", restriction.country);
                        }                        
                    }
                } 
           	}
        }        
    }

    RestrictedCountries.product_init = product_init;
    RestrictedCountries.collection_init = collection_init;
    RestrictedCountries.addRestriction = addRestriction;
  })((window.RestrictedCountries = window.RestrictedCountries || {}), jQuery);