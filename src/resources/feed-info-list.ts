export type FeedInfo = {
  label: string;
  url: string;
};

const createFeedInfoList = (feedInfoTuples: [label: string, url: string][]) => {
  const feedInfoList: FeedInfo[] = [];

  for (const [label, url] of feedInfoTuples) {
    feedInfoList.push({ label, url });
  }

  return feedInfoList;
};

// フィード情報一覧。アルファベット順
export const FEED_INFO_LIST: FeedInfo[] = createFeedInfoList([
  // ['企業名・製品名など', 'RSS/AtomフィードのURL'],
  ['ABEJA', 'https://tech-blog.abeja.asia/feed'],
  ['AIREV', 'https://zenn.dev/airev/feed'],
  ['ANDPAD', 'https://tech.andpad.co.jp/feed'],
  ['Adways', 'https://blog.engineer.adways.net/feed'],
  ['Aiming', 'https://developer.aiming-inc.com/feed'],
  ['AppBrew', 'https://tech.appbrew.io/feed'],
  ['BASE', 'https://devblog.thebase.in/feed'],
  ['Basicinc', 'https://tech.basicinc.jp/feed'],
  ['BrainPad', 'https://blog.brainpad.co.jp/feed'],
  ['CADDi', 'https://caddi.tech/feed'],
  ['CARTA', 'https://techblog.cartaholdings.co.jp/feed'],
  ['COOSY', 'https://coosy.co.jp/blog/category/system-develop/feed/'],
  ['CROOZ', 'https://crooz.shoplist.com/blog-category/technology/feed'],
  ['CauchyE', 'https://zenn.dev/cauchye/feed'],
  ['Chatwork', 'https://creators-note.chatwork.com/feed'],
  ['Classi', 'https://tech.classi.jp/feed'],
  ['DMM', 'https://inside.dmm.com/feed'],
  ['DeNA', 'https://engineering.dena.com/blog/index.xml'],
  ['Dentsu Digital', 'https://note.com/dd_techblog/rss'],
  ['ENECHANGE', 'https://tech.enechange.co.jp/feed'],
  ['Emotion Tech', 'https://tech.emotion-tech.co.jp/feed'],
  ['Eureka', 'https://medium.com/feed/eureka-engineering'],
  ['FLINTERS', 'https://labs.septeni.co.jp/feed'],
  ['FiNC', 'https://medium.com/feed/finc-engineering'],
  ['Findy', 'https://findy-code.io/engineer-lab/feed/atom'],
  ['Flatt Security', 'https://blog.flatt.tech/feed'],
  ['GA TECHNOLOGIES', 'https://tech.ga-tech.co.jp/feed'],
  ['GMOアドパートナーズ', 'https://techblog.gmo-ap.jp/feed/'],
  ['GMOペパボ', 'https://tech.pepabo.com/feed.xml'],
  ['GMOメディア', 'https://blog.gmo.media/feed/atom/'],
  ['GREE', 'https://labs.gree.jp/blog/feed/'],
  ['GameWith', 'https://tech.gamewith.co.jp/feed'],
  ['Google', 'https://developers-jp.googleblog.com/atom.xml'],
  ['Gunosy', 'https://tech.gunosy.io/feed'],
  ['HERP', 'https://tech-hub.herp.co.jp/feed.xml'],
  ['HiCustomer', 'https://tech.hicustomer.jp/index.xml'],
  ['IDCフロンティア', 'https://blog.idcf.jp/feed'],
  ['JX通信社', 'https://tech.jxpress.net/feed'],
  ['KAIZEN PLATFORM', 'https://developer.kaizenplatform.com/feed'],
  ['KARAKURI', 'https://medium.com/feed/karakuri'],
  ['KLab DSAS', 'http://dsas.blog.klab.org/index.rdf'],
  ['KLab', 'https://www.klab.com/jp/assets/rss/rss_tech.xml'],
  ['Kyash', 'https://blog.kyash.co/feed'],
  ['LAPRAS', 'https://ai-lab.lapras.com/feed/'],
  ['LCL', 'https://techblog.lclco.com/feed'],
  ['LIFULL', 'https://www.lifull.blog/feed'],
  ['LIG', 'https://liginc.co.jp/technology/feed'],
  ['LINE', 'https://engineering.linecorp.com/ja/feed/'],
  ['LIVESENSE', 'https://made.livesense.co.jp/feed'],
  ['LayerX', 'https://tech.layerx.co.jp/feed'],
  ['Leaner', 'https://zenn.dev/leaner_tech/feed'],
  ['Lisa Technologies', 'https://zenn.dev/lisatech/feed'],
  ['MNTSQ', 'https://tech.mntsq.co.jp/feed'],
  ['MUGENUP', 'https://mugenup-tech.hatenadiary.com/feed'],
  ['Magic Moment', 'https://zenn.dev/magicmoment/feed'],
  ['MicroAd', 'https://developers.microad.co.jp/feed'],
  ['Mirrativ', 'https://tech.mirrativ.stream/feed'],
  ['Money Forward Kessai', 'https://tech.mfkessai.co.jp/index.xml'],
  ['NEMTUS', 'https://zenn.dev/nemtus/feed'],
  ['NHNテコラス', 'https://techblog.nhn-techorus.com/feed'],
  ['OPEN8', 'https://open8tech.hatenablog.com/feed'],
  ['OPTiM', 'https://tech-blog.optim.co.jp/feed'],
  ['Open Reach Tech', 'https://zenn.dev/openreachtech/feed'],
  ['OpenWork', 'https://techblog.openwork.co.jp/feed'],
  ['PHONE APPLI', 'https://phoneappli.net/recruit/blog/atom.xml'],
  ['PLAID', 'https://tech.plaid.co.jp/rss/'],
  ['PLAN-B', 'https://service.plan-b.co.jp/feed'],
  ['Polestar-ID', 'https://www.psid.co.jp/news/feed/'],
  ['Progate', 'https://tech.prog-8.com/feed'],
  ['QualiArts', 'https://technote.qualiarts.jp/rss.xml'],
  ['R&D', 'https://zenn.dev/randd/feed'],
  ['ROXX', 'https://techblog.roxx.co.jp/feed'],
  ['Red Hat', 'https://rheb.hatenablog.com/feed'],
  ['Repro', 'https://tech.repro.io/feed'],
  ['Retty', 'https://engineer.retty.me/feed'],
  ['SEGA', 'https://techblog.sega.jp/feed'],
  ['Safie', 'https://engineers.safie.link/feed'],
  ['Salesforce', 'https://developer.salesforce.com/jpblogs/feed/'],
  ['Sansan', 'https://buildersbox.corp-sansan.com/feed'],
  ['SmartHR', 'https://tech.smarthr.jp/feed'],
  ['SmartNews', 'https://developer.smartnews.com/blog/feed'],
  ['Speee', 'https://tech.speee.jp/feed'],
  ['Studyplus', 'https://tech.studyplus.co.jp/feed'],
  ['Supership', 'https://www.wantedly.com/stories/s/Supership/rss.xml'],
  ['TechRacho', 'https://techracho.bpsinc.jp/feed'],
  ['Tokyo Otaku Mode', 'https://blog.otakumode.com/atom.xml'],
  ['UUUM', 'https://system.blog.uuum.jp/feed'],
  ['Ubie', 'https://zenn.dev/ubie/feed'],
  ['UnReact', 'https://zenn.dev/unreact/feed'],
  ['Unipos', 'https://fringeneer.hatenablog.com/feed'],
  ['Uzabase', 'https://tech.uzabase.com/feed'],
  ['Visional', 'https://engineering.visional.inc/blog/index.xml'],
  ['Voicy', 'https://medium.com/feed/voicy-engineering'],
  ['WESEEK', 'https://weseek.co.jp/tech/feed/'],
  ['Wantedly', 'https://www.wantedly.com/stories/s/wantedly_engineers/rss.xml'],
  ['Wiz', 'https://tech.012grp.co.jp/feed'],
  ['YAZ', 'https://www.yaz.co.jp/feed'],
  ['Yahoo! JAPAN', 'https://techblog.yahoo.co.jp/atom.xml'],
  ['Yappli', 'https://tech.yappli.io/feed'],
  ['ZOZO', 'https://techblog.zozo.com/feed'],
  ['Zaim', 'https://blog.zaim.co.jp/rss'],
  ['Zeals', 'https://tech.zeals.co.jp/feed'],
  ['aumo', 'https://techblog.aumo.co.jp/feed'],
  ['cloud.config', 'https://tech-blog.cloud-config.jp/feed/'],
  ['dely', 'https://tech.dely.jp/feed'],
  ['dip', 'https://developer.dip-net.co.jp/feed'],
  ['freee', 'https://developers.freee.co.jp/feed'],
  ['gaudiy', 'https://techblog.gaudiy.com/feed'],
  ['i-Vinci', 'https://www.i-vinci.co.jp/techblog/feed'],
  ['no plan', 'https://zenn.dev/no_plan/feed'],
  ['paiza', 'https://paiza.hatenablog.com/feed'],
  ['var', 'https://zenn.dev/var/feed'],
  ['あした', 'https://engineer.ashita-team.com/feed'],
  ['くらしのマーケット', 'https://tech.curama.jp/feed'],
  ['ぐるなび', 'https://developers.gnavi.co.jp/feed'],
  ['さくら', 'https://knowledge.sakura.ad.jp/rss/'],
  ['はてな', 'https://developer.hatenastaff.com/feed'],
  ['アイスタイル', 'https://techblog.istyle.co.jp/feed'],
  ['アイレット', 'https://cloudpack.media/tech/feed'],
  ['アカツキ', 'https://hackerslab.aktsk.jp/feed'],
  ['アクトインディ', 'https://tech.actindi.net/feed'],
  ['アスタミューゼ', 'https://lab.astamuse.co.jp/feed'],
  ['アットホーム', 'https://dblog.athome.co.jp/feed'],
  ['アメリエフ', 'https://staffblog.amelieff.jp/feed'],
  ['ウィルゲート', 'https://tech.willgate.co.jp/feed'],
  ['エキサイト', 'https://tech.excite.co.jp/feed'],
  ['エクサウィザーズ', 'https://techblog.exawizards.com/feed'],
  ['エニグモ', 'https://tech.enigmo.co.jp/feed'],
  ['エブリー', 'https://tech.every.tv/feed'],
  ['エムスリー', 'https://www.m3tech.blog/feed'],
  ['エムティーアイ', 'https://tech.mti.co.jp/feed'],
  ['オールアバウト', 'https://allabout-tech.hatenablog.com/feed'],
  ['カミナシ', 'https://kaminashi-developer.hatenablog.jp/feed'],
  ['カヤック', 'https://techblog.kayac.com/feed'],
  ['カンムテック', 'https://tech.kanmu.co.jp/feed'],
  ['クイック', 'https://aimstogeek.hatenablog.com/feed'],
  ['クックパッド', 'https://techlife.cookpad.com/feed'],
  ['クラウドワークス', 'https://engineer.crowdworks.jp/feed'],
  ['クラシコム', 'https://note.com/kurashicom_tech/rss'],
  ['コインチェック', 'https://tech.coincheck.blog/feed'],
  ['ココナラ', 'https://yomoyamablog.coconala.co.jp/feed'],
  ['ココネ', 'https://engineering.cocone.io/feed/'],
  ['コネヒト', 'https://tech.connehito.com/feed'],
  ['コミューン', 'https://tech.commmune.jp/feed'],
  ['コロプラ', 'https://blog.colopl.dev/feed'],
  ['サイオステクノロジー', 'https://tech-lab.sios.jp/feed'],
  ['サイバーエージェント', 'https://developers.cyberagent.co.jp/blog/feed/'],
  ['サイボウズ', 'https://blog.cybozu.io/feed'],
  ['シタテル', 'https://tech-blog.sitateru.com/feeds/posts/default'],
  ['シナジーマーケティング', 'https://www.techscore.com/blog/feed/'],
  ['シナプス', 'https://tech.synapse.jp/feed'],
  ['シビラ', 'https://zenn.dev/sivira/feed'],
  ['シー・エス・エス', 'https://blog.css-net.co.jp/feed'],
  ['ジークレスト', 'https://blog.gcrest.com/feed'],
  ['スタディサプリ', 'https://blog.studysapuri.jp/feed'],
  ['スタディスト', 'https://studist.tech/feed'],
  ['スタートアップテクノロジー', 'https://startup-technology.com/feed'],
  ['スターフェスティバル', 'https://zenn.dev/stafes/feed'],
  ['スペースマーケット', 'https://blog.spacemarket.com/category/code/feed/'],
  ['スマートキャンプ', 'https://tech.smartcamp.co.jp/feed'],
  ['スマートスタイル', 'https://blog.s-style.co.jp/feed/'],
  ['タイマーズ', 'https://techblog.timers-inc.com/feed'],
  ['テコテック', 'https://tec.tecotec.co.jp/feed'],
  ['テックタッチ', 'https://tech.techtouch.jp/feed'],
  ['テックファーム', 'https://www.techfirm.co.jp/feed'],
  ['デザミス', 'https://zenn.dev/u_motion/feed'],
  ['データファーム', 'https://zenn.dev/datafarm/feed'],
  ['トップゲート', 'https://www.topgate.co.jp/category/engineer/feed'],
  ['トドケール', 'https://zenn.dev/todoker/feed'],
  ['トレタ', 'https://tech.toreta.in/feed'],
  ['ドコカデ', 'https://zenn.dev/dokokade/feed'],
  ['ドリコム', 'https://tech.drecom.co.jp/feed/'],
  ['ドワンゴ', 'https://dwango.github.io/index.xml'],
  ['ドワンゴ教育サービス', 'https://blog.nnn.dev/feed'],
  ['ヌーラボ', 'https://nulab.com/ja/blog/categories/techblog/feed/'],
  ['ハンズラボ', 'https://www.hands-lab.com/feed'],
  ['ハートビーツ', 'https://heartbeats.jp/hbblog/atom.xml'],
  ['バイセル', 'https://tech.buysell-technologies.com/feed'],
  ['ヒストリア', 'https://historia.co.jp/feed'],
  ['ビザスク', 'https://tech.visasq.com/feed'],
  ['ビットバンク', 'https://tech.bitbank.cc/rss/'],
  ['ピクシブ', 'https://inside.pixiv.blog/feed'],
  ['ピクスタ', 'https://texta.pixta.jp/feed'],
  ['ファブリカ', 'https://www.fabrica-com.co.jp/techblog/feed/'],
  ['フィードフォース', 'https://developer.feedforce.jp/feed'],
  ['フォトシンス', 'https://akerun.hateblo.jp/feed'],
  ['フォージビジョン', 'https://techblog.forgevision.com/feed'],
  ['フクロウラボ', 'https://developers.fukurou-labo.co.jp/feed/'],
  ['フューチャー', 'https://future-architect.github.io/atom.xml'],
  ['フリュー', 'https://tech.furyu.jp/index.xml'],
  ['プラミナス', 'https://zenn.dev/plminus/feed'],
  ['マクロミル', 'https://techblog.macromill.com/feed'],
  ['マナリンク', 'https://zenn.dev/manalink/feed'],
  ['マネックス', 'https://blog.tech-monex.com/feed'],
  ['マネーフォワード ', 'https://moneyforward.com/engineers_blog/feed/'],
  ['マンハッタンコード', 'https://zenn.dev/manhattan_code/feed'],
  ['ミクシィ', 'https://mixi-developers.mixi.co.jp/feed'],
  ['メディアエンジン', 'https://zenn.dev/media_engine/feed'],
  ['メディアドゥ', 'https://techdo.mediado.jp/feed'],
  ['メドピア', 'https://tech.medpeer.co.jp/feed'],
  ['メドレー', 'https://developer.medley.jp/feed'],
  ['メルカリ', 'https://engineering.mercari.com/blog/feed.xml/'],
  ['モノタロウ', 'https://tech-blog.monotaro.com/feed'],
  ['モバイルファクトリー', 'https://tech.mobilefactory.jp/feed'],
  ['モルフォ', 'https://techblog.morphoinc.com/feed'],
  ['ユニファ', 'https://tech.unifa-e.com/feed'],
  ['ラクス', 'https://tech-blog.rakus.co.jp/feed'],
  ['ラクスル', 'https://tech.raksul.com/feed'],
  ['ラクーン', 'https://techblog.raccoon.ne.jp/feed'],
  ['ランサーズ', 'https://engineer.blog.lancers.jp/feed/'],
  ['リクルートコミュニケーションズ', 'https://blog.recruit.co.jp/rco/feed.xml'],
  ['リクルートテクノロジーズ', 'https://blog.recruit.co.jp/rtc/feed/'],
  ['リクルートデータ', 'https://blog.recruit.co.jp/data/index.xml'],
  ['リクルートマーケティングパートナーズ', 'https://tech.recruit-mp.co.jp/feed/'],
  ['リクルートライフスタイル', 'https://engineer.recruit-lifestyle.co.jp/techblog/feed.xml'],
  ['リンカーズ', 'https://linkers.hatenablog.com/feed'],
  ['レアゾン', 'https://techblog.reazon.jp/feed'],
  ['レコチョク', 'https://techblog.recochoku.jp/feed/atom'],
  ['レンジャーシステムズ', 'https://ranger-systems.co.jp/blog-engineer/feed'],
  ['レンティオ', 'https://zenn.dev/rentio/feed'],
  ['ロコガイド', 'https://techblog.locoguide.co.jp/feed'],
  ['ワンダープラネット', 'https://developers.wonderpla.net/feed'],
  ['弥生', 'https://tech-blog.yayoi-kk.co.jp/feed'],
  ['日本仮想化技術', 'https://tech.virtualtech.jp/feed'],
  ['現場サポート', 'https://support.genbasupport.com/techblog/feed/'],
  ['虎の穴', 'https://toranoana-lab.hatenablog.com/feed'],
  ['電通国際情報サービス', 'https://tech.isid.co.jp/feed'],
  ['食べチョク', 'https://tech.tabechoku.com/feed'],

  // 追加分(テックブログ)
  ['TECHBLOG-Engineering at Recruit', 'https://engineers.recruit-jinji.jp/techblog/feed/'],
  ['FascodeNetwork Official Blog', 'https://blog.fascode.net/feed/'],
  ['TEGAKARI', 'https://www.tegakari.net/feed/'],
  ['アカリク', 'https://acaric.jp/articles/feed'],
  ['トイビト', 'https://www.toibito.com/feed'],
  ['TechnoEdge', 'https://www.techno-edge.net/rss20/index.rdf'],
  ['TEXAL', 'https://texal.jp/feed/'],

  // 追加分(研究機関)
  ['AIST 産業技術総合研究所', 'https://www.aist.go.jp/ctl/module/mid/27/tid/75/rss.php'],
  ['統計数理研究所 プレスリリース', 'https://www.ism.ac.jp/ura/press/rss.rss'],
  ['理化学研究所 プレスリリース', 'https://www.riken.jp/feed/press_feed/'],
  ['理化学研究所 お知らせ', 'https://www.riken.jp/feed/news_feed/'],
  ['理化学研究所 イベント', 'https://www.riken.jp/feed/events_feed/'],
  ['理化学研究所 シンポジウム', 'https://www.riken.jp/feed/symposia_feed/'],
  ['理化学研究所 セミナー', 'https://www.riken.jp/feed/seminars_feed/'],
  ['理化学研究所 レクチャー', 'https://www.riken.jp/feed/lectures_feed/'],
  ['理化学研究所 クローズアップ科学道', 'https://www.riken.jp/feed/closeup_feed/'],

  ['Google Scholar', 'https://kill-the-newsletter.com/feeds/rtiykatv81b3sbp0nyx7.xml'],
  
  //追加分(学会)
  ['日本応用数理学会', 'https://jsiam.org/feed/'],

  // 追加分(Podcast)
  ['fukabori.fm', 'https://pitpa.jp/rss/fukabori'],
  ['Rebuild', 'https://feeds.rebuild.fm/rebuildfm'],

  // 追加分(Qiita)
  ['Qiita - 人気の記事', 'https://qiita.com/popular-items/feed.atom'],

  // 追加分(Zenn)
  ['Zennのトレンド', 'https://zenn.dev/feed'],

  // 追加分(Twitter)
  ['AI-SCHOLAR', 'https://nitter.net/ai_scholar/rss'],
  ['OpenAI', 'https://nitter.net/OpenAI/rss'],
  ['cvpaper.challenge', 'https://nitter.net/CVpaperChalleng/rss'],
  ['nlpaper.challenge', 'https://nitter.net/NlpaperChalleng/rss'],

  // 追加分(YouTube)
  ['予備校のノリで学ぶ「大学の数学・物理」', 'https://www.youtube.com/feeds/videos.xml?channel_id=UCqmWJJolqAgjIdLqK3zD1QQ'],
  ['Two Minute Papers', 'https://www.youtube.com/feeds/videos.xml?channel_id=UCbfYPyITQ-7l4upoX8nvctg'],
  ['Hitoshi Arai, 数理科学デジタルオープンレクチャーズ', 'https://www.youtube.com/feeds/videos.xml?channel_id=UC1lFftT-LKp34mNbV0pjkRw'],
  ['AIcia Solid Project', 'https://www.youtube.com/feeds/videos.xml?channel_id=UC2lJYodMaAfFeFQrGUwhlaQ'],

  // 追加分(AI全般)
  ['The Gradient', 'https://thegradient.pub/rss/'],
  ['Nautilus', 'http://m.nautil.us/rss/all'],
  ['Deep Learning JP', 'https://deeplearning.jp/feed/'],
  ['AI論文コレクション', 'https://ai-research-collection.com/feed/'],
  ['Hacker Noon - machine-learning', 'https://cdn.hackernoon.com/tagged/machine-learning/feed'],
  ['TECH BLOG - 株式会社AI Shift', 'https://www.ai-shift.co.jp/techblog/feed/'],
  ['KDnuggets', 'http://feeds.feedburner.com/kdnuggets-data-mining-analytics'],
  ['Distill', 'http://distill.pub/rss.xml'],
  ['Facebook', 'https://research.facebook.com/feed/'],
  ['Deep Mind', 'https://deepmind.com/blog/feed/basic/'],
  ['The Stanford AI Lab Blog', 'http://ai.stanford.edu/blog/feed.xml'],
  ['Amazon Science', 'https://www.amazon.science/index.rss'],
  ['The AI Blog', 'https://blogs.microsoft.com/ai?feed=rss2'],
  ['Google AI Blog', 'http://googleaiblog.blogspot.com/atom.xml'],
  ['WebBigData', 'https://webbigdata.jp/feed'],
  ['アイブン', 'https://aiboom.net/feed'],

  // (はてなブログ)
  ['kanayamaのブログ', 'https://tepppei.hatenablog.com/rss'],
  ['u++の備忘録', 'https://upura.hatenablog.com/rss'],
  ['渋谷駅前で働くデータサイエンティストのブログ', 'https://tjo.hatenablog.com/rss'],
  ['Taste of Tech Topics', 'https://acro-engineer.hatenablog.com/rss'],

  // (getrevue)
  ['State of AI Report', 'https://www.getrevue.co/profile/stateofai?format=rss'],
  ['Akira\'s Machine Learning News (ja)', 'https://www.getrevue.co/profile/akiratosei_ja?format=rss'],
  ['piqcy', 'https://www.getrevue.co/profile/icoxfog417?format=rss'],
  ['Weekly Kaggle News', 'http://www.getrevue.co/profile/upura?format=rss'],

  // subtrack
  ['Deep Learning Weekly', 'https://www.deeplearningweekly.com/feed/'],

  // 追加分(MLOps)
  ['MLOps - Practices', 'https://masatakashiwagi.github.io/mlops-practices/index.xml'],

  // 追加分(コンピュータビジョン)
  // (はてなブログ)
  ['CV CG CP ML CMOS', 'https://klb.hatenablog.com/rss'],
  ['takminの書きっぱなし備忘録 @はてなブログ', 'https://takmin.hatenablog.com/rss'],

  // 追加分(数学全般)
  ['数学の景色', 'https://mathlandscape.com/feed/'],
  ['大学数学の授業ノート', 'https://math-notes.info/feed/'],
  ['趣味の大学数学', 'https://math-fun.net/feed/'],
  ['What\'s new', 'https://terrytao.wordpress.com/feed/'],
  ['The n-Category Café', 'https://golem.ph.utexas.edu/category/atom10.xml'],
  ['Dan Ma\'s Topology Blog', 'https://dantopology.wordpress.com/feed'],
  ['数学カフェ', 'https://mathcafe.net/feed/'],
  ['あーるえぬ｜数学のあれこれ', 'https://math-note.xyz/feed/'],

  // (はてなブログ)
  // 8年後の記事があったためコメントアウト
  // ['とぽろじい　～大人の数学自由研究～', 'https://math-topology.hatenablog.com/rss'],
  ['tsujimotterのノートブック', 'https://tsujimotter.hatenablog.com/rss'],
  ['Jij Tech Blog', 'https://jijtech.hatenablog.com/rss'],
  ['ちょーさんメモ出張版 気まぐれブログ', 'https://cho-san.hatenablog.jp/rss'],
  // (LiveDoor)
  ['龍孫江の数学日誌', 'http://blog.livedoor.jp/ron1827-algebras/atom.xml'],

  // 追加分(統計学)
  ['関西学院大学社会学部 清水裕士のWebサイト', 'https://norimune.net/feed'],

  // 追加分(物理学)
  ['Yusuke Hayashi\'s Blog', 'https://hayashiyus.jp/?feed=rss2'],

  // 追加分(学術英語)
  ['学術英語アカデミー', 'https://www.ulatus.jp/academy/feed/'],

  // 追加分(ロボティクス)
  ['東京ロボティクス開発者ブログ', 'http://blog.robotics.tokyo/feed'],
  ['Preferred Networks Research & Development', 'https://tech.preferred.jp/ja/blog/feed/'],

  // 追加分(脳科学・神経科学)
  ['pooneilの脳科学論文コメント', 'http://pooneil.sakura.ne.jp/atom.xml'],
  ['株式会社アラヤ', 'https://www.araya.org/feed/'],

  // 追加分(新刊出版)
  ['森北出版', 'https://note.com/morikita/rss'],

  // 追加分(Windowsソフト)
  ['新着ソフトレビュー - Vector', 'https://www.vector.co.jp/rss/softnews.xml'],
  ['窓の杜', 'https://forest.watch.impress.co.jp/data/rss/1.0/wf/feed.rdf'],
  ['ソフタロウ', 'https://softaro.net/feed/'],
  
  // 追加分(コンシューマーゲーム)
  ['Gaming - Polygon', 'https://www.polygon.com/rss/gaming/index.xml'],
  ['Gaming - IGNJapan', 'https://jp.ign.com/games.xml'],
  
  // 追加分(ガジェット)
  ['ギズモード・ジャパン', 'http://feeds.gizmodo.jp/rss/gizmodo/index.xml'],
  ['デジクル', 'https://smartparty.jp/feed'],
  
  // 追加分（勉強会）
  ['勉強会スライドbot', 'https://yuji.software/tech_slideshare/feed.xml'],
]);

// 候補
// パースエラー修正
// ['Advanced Technology Lab', 'https://atl.recruit.co.jp/blog/feed/'],
// パースエラー修正
// ['Qiita', 'https://zine.qiita.com/'],
// 日本語以外が交じるのを解消できたら入れたい
// ['クラスメソッド', 'https://dev.classmethod.jp/feed'],
// 403 Forbidden
// ['Cygames', 'https://tech.cygames.co.jp/feed/'],
