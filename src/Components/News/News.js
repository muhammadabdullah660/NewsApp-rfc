import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Ava Sasani, Vimal Patel",
      title:
        "Killings of Three Muslim Men in Albuquerque May Be Linked, Police Say - The New York Times",
      description:
        "The authorities also suspect the deaths could be connected to the homicide of a Muslim man in 2021.",
      url: "https://www.nytimes.com/2022/08/06/us/muslim-men-killings-new-mexico.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/08/07/us/00muslim-killings-print/00muslim-killings-facebookJumbo-v2.jpg",
      publishedAt: "2022-08-07T02:16:45Z",
      content:
        "We are incredibly sickened with the idea that someone has this much hate against innocent people, said Ahmad Assed, the president of the Islamic Center of New Mexico. Were scared for our families, we… [+1226 chars]",
    },
    {
      source: {
        id: null,
        name: "KCRA Sacramento",
      },
      author: "Greta Serrin",
      title:
        "Folsom native identified as third Washington D.C. lightning strike victim - KCRA Sacramento",
      description:
        "One of the three people who died in a Washington, D.C., lighting strike this week has been identified by family as Northern California native Brooks Lambertson.",
      url: "https://www.kcra.com/article/dc-lightning-strike-victim-identified-folsom-native/40825605",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/brooks-lambertson-1659838358.png?crop=1.00xw:0.790xh;0,0.130xh&resize=1200:*",
      publishedAt: "2022-08-07T01:16:00Z",
      content:
        "One of the three people who died in a Washington, D.C., lighting strike this week has been identified by family as Northern California native Brooks Lambertson. \r\nThe 29-year-old from Folsom died fro… [+1194 chars]",
    },

    {
      source: {
        id: null,
        name: "Eonline.com",
      },
      author: "Ashley Joy Parker",
      title:
        "Pete Davidson Makes a Fashion Statement Following Kim Kardashian Breakup - E! Online - E! NEWS",
      description:
        "One day after the news broke that Kim Kardashian and Pete Davidson called it quits, the former SNL star was spotted on set in Australia wearing a t-shirt with an interesting message on it.",
      url: "https://www.eonline.com/news/1341093/pete-davidson-makes-a-fashion-statement-following-kim-kardashian-breakup",
      urlToImage:
        "https://akns-images.eonline.com/eol_images/Entire_Site/2022421/rs_1200x1200-220521164817-1200-pete-davidson-snl.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
      publishedAt: "2022-08-07T00:17:00Z",
      content:
        "Pete Davidson is letting his outfit do the talking.\r\nOn Aug, 6, the former Saturday Night Live star was photographed for the first time since the news broke that he and girlfriend Kim Kardashian spli… [+704 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Amber Phillips, Tom Hamburger",
      title:
        "Indiana adopts restrictive abortion law, prompting economic fallout - The Washington Post",
      description: "",
      url: "https://www.washingtonpost.com/nation/2022/08/06/indiana-abortion-law/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/QASJZ3QVJEI63BECA3A4QTHI6I.jpg&w=1440",
      publishedAt: "2022-08-06T23:51:08Z",
      content:
        "Comment on this story\r\nIndianas new sweeping ban on abortion produced immediate political and economic fallout Saturday, as some of the states biggest employers objected to the restrictions, Democrat… [+9906 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Andrew Carey, CNN",
      title:
        "Children among the victims of Gaza escalation as Israel clashes with Islamic Jihad for second day - CNN",
      description:
        "The Israeli military campaign against Islamic Jihad went into its second day Saturday evening with continued airstrikes on what it said were militant targets in Gaza.",
      url: "https://www.cnn.com/2022/08/05/middleeast/israel-gaza-strikes-islamic-jihad-intl/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220805101144-01-gaza-israel-strikes-0805-super-tease.jpg",
      publishedAt: "2022-08-06T23:41:00Z",
      content:
        "Jerusalem and Gaza (CNN)The Israeli military campaign against Islamic Jihad went into its second day Saturday evening with continued airstrikes on what it said were militant targets in Gaza.\r\nThe Pal… [+5472 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Sharon LaFraniere, Noah Weiland",
      title:
        "Officials Wrestle With Whether to Allow New Monkeypox Vaccination Strategy - The New York Times",
      description:
        "A new way of injecting monkeypox vaccine could stretch the nation’s supply of shots, but some experts argue that the approach has not been sufficiently studied.",
      url: "https://www.nytimes.com/2022/08/06/us/politics/monkeypox-vaccination-strategy.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/08/05/us/politics/05dc-shots-1/05dc-shots-1-facebookJumbo.jpg",
      publishedAt: "2022-08-06T23:39:21Z",
      content:
        "Although the 2015 trial involved hundreds of participants, some experts note that it was a single study that was limited in what it measured. Researchers at the N.I.H. had been planning to test the i… [+1759 chars]",
    },
    {
      source: {
        id: null,
        name: "NBCSports.com",
      },
      author: "Mike Florio",
      title:
        "As he tries to get a new contract, Kareem Hunt isn’t participating in team drills - NBC Sports",
      description:
        "Browns running back Kareem Hunt signed a team-friendly deal in 2020. Currently, he’s not feeling overly friendly toward the team.Per multiple reports, Hunt isn’t participating in team drills while he tries to get a new contract. Hunt spoke openly in June abou…",
      url: "https://profootballtalk.nbcsports.com/2022/08/06/as-he-tries-to-get-a-new-contract-kareem-hunt-isnt-participating-in-team-drills/",
      urlToImage:
        "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/08/GettyImages-1412657066-e1659827509630.jpg",
      publishedAt: "2022-08-06T23:12:00Z",
      content:
        "Browns running back Kareem Hunt signed a team-friendly deal in 2020. Currently, hes not feeling overly friendly toward the team.\r\nPer multiple reports, Hunt isnt participating in team drills while he… [+973 chars]",
    },
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "https://www.engadget.com/about/editors/igor-bonifacic",
      title:
        "Physicist trolls James Webb Space Telescope fans with a photo of a chorizo sausage - Engadget",
      description:
        "The James Webb Space Telescope was recently the subject of a not-so-charming prank..",
      url: "https://www.engadget.com/james-webb-space-telescope-chorizo-photo-222957990.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2021-12/20af84d0-6749-11ec-bdf5-c01480754637",
      publishedAt: "2022-08-06T22:34:26Z",
      content:
        "With its captivating images of far-flung galaxies, its safe to say the James Webb Space Telescope\r\n has captured the imagination of the world over. It was also recently the subject of a not-so-charmi… [+1581 chars]",
    },
    {
      source: {
        id: null,
        name: "WCTV",
      },
      author: "WCTV Staff",
      title: "First monkeypox case confirmed in Leon County - WCTV",
      description:
        "DOH Leon said Saturday that is has identified the first monkeypox case in a Leon County resident.",
      url: "https://www.wctv.tv/2022/08/06/first-monkeypox-case-confirmed-leon-county/",
      urlToImage:
        "https://gray-wctv-prod.cdn.arcpublishing.com/resizer/raJgnyNsTap6X8W8kFrPqNztRh4=/980x0/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/K6LPFJZ4ORHEFIRJMICYXE527Y.png",
      publishedAt: "2022-08-06T22:30:00Z",
      content:
        "TALLAHASSEE, Fla. (WCTV) - The Florida Department of Health in Leon County has confirmed its first monkeypox infection in a county resident, according to a news release.\r\nDOH Leon said Saturday that … [+431 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Emma Roth",
      title:
        "Fitbit will soon no longer let you transfer music from your PC - The Verge",
      description:
        "Fitbit is ending support for its Connect app on October 13th. The app, available on both Mac and Windows, lets users sync fitness data between devices, as well as transfer music from their computer to Fitbit.",
      url: "https://www.theverge.com/2022/8/6/23294990/fitbit-ending-support-music-transfers-pcs-and-macs-connect-versa-ionic",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/5ALEROUhxYTzyWsbL0tbIqqifFM=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19168631/akrales_190903_3635_0018.jpg",
      publishedAt: "2022-08-06T22:27:35Z",
      content:
        "Fitbits getting rid of its Connect app on October 13th\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nPhoto by Amelia Holowaty Krales / The Verge… [+2086 chars]",
    },
    {
      source: {
        id: null,
        name: "ESPN",
      },
      author: "David Newton",
      title:
        "No 'major decision' on Carolina Panthers QBs Baker Mayfield, Sam Darnold before second preseason game, coach says - ESPN",
      description:
        "Panthers coach Matt Rhule says he doesn't plan to make a quarterback decision before Carolina's second preseason game Aug. 19.",
      url: "https://www.espn.com/nfl/story/_/id/34357397/no-major-decision-carolina-panthers-qb-battle-baker-mayfield-sam-darnold-second-preseason-game-coach-says",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0803%2Fr1043932_1296x729_16%2D9.jpg",
      publishedAt: "2022-08-06T22:21:18Z",
      content:
        'SPARTANBURG, S.C. -- The Carolina Panthers won\'t make what coach Matt Rhule called a "major decision" on any position, particularly between quarterbacks Baker Mayfield and Sam Darnold, until after th… [+3150 chars]',
    },
    {
      source: {
        id: null,
        name: "KABC-TV",
      },
      author: null,
      title:
        "Windsor Hills crash: Vigil honors victims of horrific crash on Slauson and La Brea - KABC-TV",
      description:
        "A somber vigil was held to honor the victims of a multi-vehicle crash in Windsor Hills that killed six people, including a pregnant woman.",
      url: "https://abc7.com/windsor-hills-crash-victims-fatal-accident-collision/12104384/",
      urlToImage:
        "https://cdn.abcotvs.com/dip/images/12105320_WINDSOR_VICTIMS.jpg?w=1600",
      publishedAt: "2022-08-06T22:14:28Z",
      content:
        "WINDSOR HILLS, Calif. (KABC) -- A somber vigil was held Friday evening to honor the victims of a multi-vehicle crash in Windsor Hills that killed six people, including a pregnant woman who died along… [+3791 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Ryan Morik",
      title:
        "Saints' Michael Thomas participates in 11-on-11 drills for first time in almost two years - Fox News",
      description:
        "Saints receiver Michael Thomas has not played a game since the 2020 NFL season, but he participated in 11-on-11 drills for the first time in almost two years Saturday.",
      url: "https://www.foxnews.com/sports/saints-michael-thomas-participates-11-on-11-drills-first-time-two-years",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/08/MT.jpg",
      publishedAt: "2022-08-06T21:42:16Z",
      content:
        "The New Orleans Saints are bracing for the return of an elite receiver.\r\nMichael Thomas participated in 11-on-11 drills for the first time in almost two years Saturday.\r\nThomas has been out since the… [+2106 chars]",
    },

    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Karen Hao in Hong Kong and Joyu Wang in Taipei",
      title:
        "Beijing Simulates Attack on Taiwan as Chinese Exercises Extend Into Third Day - The Wall Street Journal",
      description:
        "Chinese military aircraft and ships crossed the halfway mark of the Taiwan Strait, in a simulated land strike on the self-governing island that Beijing claims as its own.",
      url: "https://www.wsj.com/articles/beijing-simulates-attack-on-taiwan-as-chinese-exercises-extend-into-third-day-11659784913",
      urlToImage: "https://images.wsj.net/im-599117/social",
      publishedAt: "2022-08-06T21:02:00Z",
      content:
        "A large number of Chinese military aircraft and ships crossed the halfway mark of the Taiwan Strait on Saturday, in a simulated land strike on the self-governing island that Beijing claims as its own… [+215 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Lora Kolodny",
      title:
        "Elon Musk challenges Twitter CEO Parag Agrawal to a debate on bots - CNBC",
      description:
        "Elon Musk took shots at Twitter on Saturday, and dared CEO Parag Agrawal to debate him in the midst of a legal battle over a $44 billion acquisition gone awry.",
      url: "https://www.cnbc.com/2022/08/06/elon-musk-challenges-twitter-ceo-parag-agrawal-to-a-debate-on-bots.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107063491-16529089492022-05-18t210710z_1773411046_rc2w9u9z7ee9_rtrmadp_0_tesla-musk.jpeg?v=1655979407&w=1920&h=1080",
      publishedAt: "2022-08-06T20:35:42Z",
      content:
        'Centi-billionaire Elon Musk provoked Twitter and challenged the company\'s CEO Parag Agrawal to a "public debate" about fake accounts and spam in the midst of a contentious legal battle over a $44 bil… [+4716 chars]',
    },
    {
      source: {
        id: "axios",
        name: "Axios",
      },
      author: "Herb Scribner",
      title:
        'Trevor Reed: Brittney Griner to face "serious" health threats in Russian prison - Axios',
      description:
        "Griner was found guilty on drug charges by a Russian court last week.",
      url: "https://www.axios.com/2022/08/06/brittney-griner-trevor-reed-russia-prison",
      urlToImage:
        "https://images.axios.com/MIV5OAfmKRq1VnjuhaRYlOO0d4k=/0x0:1280x720/1366x768/2022/08/06/1659809736801.jpg",
      publishedAt: "2022-08-06T20:27:27Z",
      content:
        'Trevor Reed, an American citizen recently freed from a Russian prison, told CNN that WNBA star Brittney Griner will experience "serious threats" to her health if she is sent to a labor camp.\r\nDriving… [+1601 chars]',
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "David Connett",
      title:
        "Strikes at Ukrainian nuclear plant ‘alarming’, says UN watchdog chief - The Guardian",
      description:
        "Head of International Atomic Energy Agency says shelling at Zaporizhzhia plant underlines ‘very real risk of a nuclear disaster’",
      url: "https://amp.theguardian.com/world/2022/aug/06/strikes-at-ukrainian-nuclear-plant-alarming-says-un-watchdog-chief",
      urlToImage:
        "https://i.guim.co.uk/img/media/7c8b3f265f77e19cd1bce4eae68b3c634bf9d9ad/0_276_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5ef0868fd1041f2a5ae3120951e23230",
      publishedAt: "2022-08-06T20:26:00Z",
      content:
        "The UN nuclear watchdog has called for an immediate end to all military action near Ukraines Zaporizhzhia nuclear plant after it was hit by shelling, causing one of the reactors to shut down and crea… [+1839 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Greg Kumparak",
      title:
        "Amazon buys Roomba’s maker, Bolt vanishes, and YC slims down - TechCrunch",
      description:
        "Hello again! Welcome back to Week in Review, the newsletter where we quickly recap the top stories to cross TechCrunch dot-com over the past seven days. Want it in your inbox? Get it here. The most read story this week is kind of a wild one: Bolt Mobility, an…",
      url: "https://techcrunch.com/2022/08/06/amazon-buys-roombas-maker-bolt-vanishes-and-yc-slims-down/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2019/11/Roomba-S9-01.jpg?w=600",
      publishedAt: "2022-08-06T20:19:08Z",
      content:
        "Hello again! Welcome back to Week in Review, the newsletter where we quickly recap the top stories to cross TechCrunch dot-com over the past seven days. Want it in your inbox? Get it here.\r\nThe most … [+2689 chars]",
    },
  ];
  static defaultProps = {
    country: "us",
    pageSize: 5,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `NewsApp - ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }
  async componentDidMount() {
    this.dataFetch();
  }
  async dataFetch() {
    this.props.setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    data = await data.json();
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    data = await data.json();
    this.setState({
      articles: this.state.articles.concat(data.articles),
      totalResults: data.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <div className="container my-3 text-center">
          <h2>
            {`Top Headlines - ${this.capitalizeFirstLetter(
              this.props.category
            )}`}
          </h2>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={
              <h4>
                <Spinner />
              </h4>
            }
          >
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div
                    className="col-lg-4 col-md-4 col-sm-6 col-xs-12"
                    key={element.url}
                  >
                    <NewsItem
                      title={element.title.slice(0, 50)}
                      description={
                        element.description !== null
                          ? element.description.slice(0, 80) + "..."
                          : "..."
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={!element.author ? "Unknown" : element.author}
                      date={element.publishedAt}
                      source={
                        !element.source.name ? "N/A" : element.source.name
                      }
                    />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}

export default News;
