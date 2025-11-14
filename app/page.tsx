"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "../components/Lightbox";
import SidebarGallery, { GalleryItem } from "../components/SidebarGallery";
import SidebarSection from "../components/SidebarSection";

export default function Page() {
  const gallery: GalleryItem[] = [
    { src: "/images/littlejamaicaintro.jpg", alt: "Little Jamaica Intro Pic", caption: "Little Jamaica: A cultural hub for Black businesses and residents located in Eglinton West", className: "mt-0" },
    { src: "/images/trafficcongestion.jpg", alt: "Traffic Congestion in Little Jamaica", caption: "Little Jamaica faces severe traffic congestion: City council held a meeting to address the issue (City of Toronto, 2025)", className: "mt-0" },
    { src: "/images/fairbank.jpg", alt: "Fairbank Station", caption: "Fairbank station: One of the stations of the Eglinton Crosstown LRT in Little Jamaica", className: "mt-33" },
    { src: "/images/constructioneglinton.jpg", alt: "Eglinton Construction in 2020", caption: "Sidewalk closures in Eglinton West in 2020 (Photo from McLean, 2020)", className: "mt-282" },
    { src: "/images/experienceeglinton.jpg", alt: "Experience Eglinton Wayfinding 2019", caption: "Metrolinx’s Experience Eglinton business support video, depicting wayfinding methods for businesses (Photo from Metrolinx, 2019)", className: "mt-130" },
    { src: "/images/flyers.jpg", alt: "TTC Flyers", caption: "Flyers in Little Jamaica highlight frustration with long bus wait times, calling for transit lanes to improve service reliability", className: "mt-95" },
    { src: "/images/citynotice.jpg", alt: "City Notice for High-rise", caption: "A high-rise redevelopment notice in Little Jamaica is met with vandalised comments — ‘Knock this down when they haven’t started building across the street in almost 4 years?!’", className: "mt-355" },
    { src: "/images/forrent.jpg", alt: "For Rent Signs outside Store", caption: "For rent sign placed outside of the store ‘Caribbean Slice’, a Black-owned business", className: "mt-25" },
    { src: "/images/forlease.jpg", alt: "For Lease Signs ", caption: "Stores with ‘For Lease’ or ‘For Rent’ signs are common along Little Jamaica", className: "mt-0" },
    { src: "/images/noisebarrier.jpg", alt: "Noise Barrier at Riverdale", caption: "Noise Barrier constructed in Riverdale where Ontario Line construction will take place", className: "mt-80" },
    { src: "/images/noiseblanket.jpg", alt: "Noise Blankets at Pape Avenue", caption: "Noise blankets being deployed at Ontario Line Construction site near Pape Avenue", className: "mt-0" },
    { src: "/images/papewayfinding.jpg", alt: "Wayfinding signs at Pape Avenue", caption: "Wayfinding measures were quickly deployed when construction blocked visibility of Storefronts in Pape Avenue", className: "mt-0" },
    { src: "/images/culturaldistrict.jpg", alt: "Poster celebrating Multicultural Day in Cultural District of Little Jamaica", caption: "Poster promoting Multicultural Day in Little Jamaica’s Cultural District", className: "mt-48" },
  ];

  const [open, setOpen] = useState<GalleryItem | null>(null);

  return (
    <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
      <article className="article">
        <header className="mb-6">
          <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500">
            <span className="brand">ISC Project</span>
            <span>•</span>
            <time dateTime="2025-11-14">14 Nov 2025</time>
            <span>• Toronto </span>
          </div>
         <h1 className="font-black font-[family-name:var(--font-merri)] text-3xl md:text-4xl lg:text-5xl">
          Equity Under Construction: Deconstructing Eglinton Crosstown Project’s Impact on Little Jamaica
        </h1>
          <figure className="my-6">
            <Image src="/images/littlejamaica.jpg" alt="Little Jamaica" width={1600} height={900} className="rounded-md border" />
            <figcaption className="caption-muted">Little Jamaica continues to endure the ongoing impacts of the Eglinton Crosstown construction. Shockingly, as of November 2025, the line has yet to officially open — four years past its original 2021 target.</figcaption>
          </figure>

          <div className="mt-6 flex items-center gap-3">
            <Image src="/images/author.jpg" alt="Isaac headshot" width={48} height={48} className="rounded-full border" />
            <div className="text-sm">
              <div className="font-semibold">Isaac Ong</div>
              <div className="text-zinc-500">NUSCBC • Author</div>
            </div>
          </div>
        </header>

       {/* === START OF ARTICLE BODY === */}
        <section className="mt-6 space-y-4 text-[1.05rem] leading-8 text-justify">
        <p>
            Transit equity — the fair distribution of transportation benefits and burdens — is a relatively recent framework through 
            which transit planners seek to improve conditions for disadvantaged communities (Karner et al., 2020). In its 2016 equity 
            report, Metrolinx — Ontario’s provincially owned transportation agency — employed transit equity to justify expanding transit 
            nfrastructure into low-income and underserved areas. Their stated aim is to enhance accessibility and reduce travel times for 
            Toronto’s most vulnerable neighbourhoods, thereby improving access to employment, essential services and regional mobility 
            (Hertel et al., 2016).
        </p>

        <p>
            However, this focus on distributional outcomes overlooks another critical dimension of transit equity: the burdens imposed 
            on communities during transit-infrastructure construction. The case of the Eglinton Crosstown Light Rail Transit (LRT) and 
            its impact on Little Jamaica, a neighbourhood home to racialised, equity-deserving communities (Blackman & Lintern, 2022, 
            p. 3), reveals how Metrolinx has in fact exacerbated transit inequities. By failing to adequately mitigate and compensate 
            for prolonged construction, sidewalk closures, excessive noise and the resulting displacement, Metrolinx has led a 
            marginalised community to disproportionately bear the negative externalities of infrastructure construction, while 
            excluding the community from the long-term benefits it was meant to receive. Therefore, this paper argues that Metrolinx’s 
            access-focused approach to transit equity fails to account for the burdens of infrastructure construction, resulting in 
            outcomes that run counter to its stated equity goals.

        </p>

        <h2>Background of Little Jamaica</h2>
        <p>
            Little Jamaica, also known as Eglinton West, is an ethnic enclave situated northwest of Toronto’s city centre, and doubles as a 
            commercial corridor and a residential zone home to Caribbean and African immigrants (City of Toronto, 2021). In the 1960s, an 
            influx of Jamaicans arrived under the West Indian Domestic Scheme, forming the first wave of Black immigrants in the area 
            (Davis, 2022). Today, Little Jamaica boasts the highest concentration of Black and Caribbean-owned businesses in the City of 
            Toronto (Black Business and Professional Association, n.d.). Yet, the neighbourhood remains socioeconomically vulnerable: 
            in 2016, the average household income was $72,936, well below the city average of $102,721 (Pitter et al., 2023a, p. 27).
        </p>

        <figure className="my-6 block lg:hidden">
            <Image src="/images/littlejamaicaintro.jpg" alt="Little Jamaica Street" width={1600} height={900} className="rounded-md border" />
            <figcaption className="caption-muted">Little Jamaica: A cultural hub for Black businesses and residents located in Eglinton West</figcaption>
        </figure>

        <p>
            Moreover, transportation access in Little Jamaica presents further challenges. About 60% of residents commute to work by car, 
            while 35% rely on public transit (Doyle et al., 2020a, p. 18). However, both modes of transportation face challenges. Drivers 
            experience persistent congestion owing to the neighbourhood’s proximity to Allen Road, a municipal expressway that serves as a 
            feeder route to Highway 401 — one of the primary regional corridors out of Toronto. Consequently, heavy traffic is funnelled 
            through the neighbourhood via the Eglinton-Allen on-ramp (City of Toronto, 2025; Doyle et al., 2020b, p. 68). For public transit 
            users, the main mode of public transit is buses; yet the two major bus routes that serve the area face severe crowding during 
            morning hour (Pitter et al., 2023b, p. 42). Consequently, in parts of the corridor, up to 25% of commuters spend over an hour 
            getting to work (Doyle et al., 2020a, p. 19). These factors contribute to Little Jamaica’s status as a vulnerable community that 
            is underserved by transit. 
        </p>

        <figure className="my-6 block lg:hidden">
            <Image src="/images/trafficcongestion.jpg" alt="Traffic Congestion in Little Jamaica" width={1600} height={900} className="rounded-md border" />
            <figcaption className="caption-muted">Little Jamaica faces severe traffic congestion: City council held a meeting to address the issue (City of Toronto, 2025)</figcaption>
        </figure>

        <h2>Metrolinx’s Equity Framework</h2>
        <p>
            Since 2016, Metrolinx has identified “equity” — the fair and responsive delivery of transit services to meet the needs of vulnerable 
            groups, including low-income and racialised populations — as a core objective of its Big Move Regional Transportation Plan (Hertel et al., 
            2016, p. 9). Within this framework, the Eglinton Crosstown LRT is positioned as a project that advances their equity goals. First announced in 
            2007, the Eglinton Crosstown LRT spans 19 kilometres across Eglinton Avenue, including Little Jamaica, and is intended to link underserved 
            neighbourhoods to the broader regional network (Nickle, 2021). Metrolinx claims the LRT will be 60% faster than existing bus services (Metrolinx, 2017), 
            bringing rapid transit to areas where median household incomes are up to 43% below the city average (Spurr, 2018).
        </p>

        <figure className="my-6 block lg:hidden">
            <Image src="/images/fairbank.jpg" alt="Fairbank Station" width={1600} height={900} className="rounded-md border" />
            <figcaption className="caption-muted">Fairbank station: One of the stations of the Eglinton Crosstown LRT in Little Jamaica</figcaption>
        </figure>

        <p>
            However, Metrolinx’s approach to transit equity remains narrowly defined. Its equity report identifies only three areas: 
            network planning, service frequency and quality and fare structure (Hertel et al., 2016, p. 4), while overlooking broader 
            dimensions highlighted by scholars. Although access to opportunities is widely recognised, scholars argue that transit 
            equity must also account for negative externalities of infrastructure development, including air pollution, noise, 
            vibration and transit-induced displacement (Karner et al., 2020, p. 441). These burdens disproportionately affect 
            low-income and racialised communities, but are missing from Metrolinx’s framework.
        </p>

        <p>
            Metrolinx’s failure to consider these broader dimensions of equity has contributed to significant inequities in the 
            Eglinton Crosstown project, particularly in Little Jamaica, leading to three major adverse outcomes: disproportionate 
            negative externalities on local communities, prolonged construction delays and transit-induced displacement. 
            To fully grasp the extent of these impacts, I will examine how they have affected two key stakeholder groups: residents 
            and businesses.
        </p>

        <h2>External Burdens</h2>
        <p>
            While every construction project inevitably causes disruptions such as noise, vibrations and sidewalk closures, 
            these impacts were especially severe for businesses and residents near Eglinton Crosstown construction sites.
        </p>

        <h3>Noise and Vibrations</h3>
        <p>
            Toronto’s noise bylaws typically restrict nighttime construction, but a 2010 City Council motion allowed Metrolinx to carry out 
            overnight work on the Eglinton Crosstown project (Mannsbach, 2016). Another key factor that worsened the noise and vibration 
            impacts was Metrolinx’s heavy reliance on the cut-and-cover construction method. This approach entails excavating a trench and 
            building the tunnel inside it. Of the 15 stations constructed along the line, 11 used this approach (Metrolinx, 2017). While more 
            cost-effective than the alternative method of bored tunnelling — where tunnels are excavated horizontally underground using a 
            tunnel-boring machine — cut-and-cover causes far greater surface disruption (Potter, 2024). As one Queen Street West BIA member 
            observed when comparing with the Ontario Line, “the key difference is because the Eglinton line was cut-and-cover, so by nature 
            that’s already going to be very disruptive” (Fleguel, 2023). 
        </p>

        <p>
            This combination of overnight construction and surface-level excavation had serious consequences for nearby communities. 
            Residents faced persistent noise and vibration, with Metrolinx receiving 160 related complaints in November 2016 alone. Local 
            businesses were also heavily affected. The chair of the Eglinton Way Business Improvement Area (BIA) — designated districts where 
            local businesses collaborate to improve and promote their area — noted multiple reports of property damage caused by prolonged 
            disturbances (Mannsbach, 2016). For instance, Casual International Beauty Salon reported that in 2015, repeated vibrations caused 
            the store’s basement to flood and led the storefront sign to fall several times (Gray-Donald, 2025). Even worse, other businesses 
            such as Kozeta Salon were forced to suspend operations due to excessive noise (Mannsbach, 2016).
        </p>

        <h3>Sidewalk Closures and Reduced Visibility</h3>
        <p>
          Another major challenge for businesses in Little Jamaica was the loss of foot traffic due to sidewalk closures and obstructed 
          storefronts. Many businesses relied heavily on walk-in customers for survival (Baker et al., 2020, p. 19; Bessonov, 2020). 
          However, construction hoarding and debris blocked visibility and created an uninviting pedestrian environment along Eglinton 
          Avenue, making it difficult for businesses to attract customers, leading to widespread closures (Baker et al., 2020, p. 19). 
          An anecdotal account is given by Beni Bouka, owner of Beni Boo Styles, who described how reductions in foot traffic caused nearby 
          shops to close (McLean, 2020).
        </p>

        <figure className="my-6 block">
            <Image src="/images/beni-bouka.jpg" alt="Beni Bouka" width={1600} height={900} className="rounded-md border" />
            <figcaption className="caption-muted">Local business owner Beni Bouka describes the toll of construction on the neighbourhood: 
              “I’ve got my neighbours closed down; there’s a hair salon next to me, they closed. They just can’t keep up with the rent 
              and the drop in foot traffic … it’s very disheartening.” (Photo from McLean, 2020)</figcaption>
        </figure>

        <figure className="my-6 block lg:hidden">
            <Image src="/images/constructioneglinton.jpg" alt="Sidewalk Closure at Eglinton" width={1600} height={900} className="rounded-md border" />
            <figcaption className="caption-muted">Sidewalk closures in Eglinton West in 2020 (Photo from McLean, 2020)</figcaption>
        </figure>

        <p>
            Metrolinx did attempt to mitigate the impact by partnering with local BIAs to launch Experience Eglinton — a campaign aimed 
            at encouraging continued shopping along the corridor (CBC News, 2019). The initiative included digital marketing, improved 
            wayfinding and signages (Metrolinx, 2019). However, Baker et al. (2020, p. 19) dismissed these measures as “token gestures 
            of assistance” that failed to address the fundamental issues of limited access and reduced foot traffic to Black-owned 
            businesses. Business owner McDonald agrees, remarking that the campaign “didn’t work” in restoring foot traffic to 
            pre-construction levels, as ongoing construction continued to drive people away from Eglinton (CBC News, 2019). Notably, 
            Experience Eglinton was only launched in 2019, long after construction had begun in Little Jamaica in 2014 (Alamenciak, 2014). 
            This delayed response significantly weakened its effectiveness; by the time the campaign was introduced, York-Eglinton BIA 
            reported that 40 to 45 percent of businesses between had already closed or relocated (McLean, 2019)
        </p>

        <figure className="my-6 block lg:hidden">
            <Image src="/images/experienceeglinton.jpg" alt="Experience Eglington Photo" width={1600} height={900} className="rounded-md border" />
            <figcaption className="caption-muted">Metrolinx’s Experience Eglinton business support video, depicting wayfinding methods for businesses (Photo from Metrolinx, 2019)</figcaption>
        </figure>

        <h2>Prolonged Delays and Uncertainty</h2>
        <p>
            In addition to external burdens, the Eglinton Crosstown LRT has faced severe delays, prompting city councillor Mike Colle 
            to call it the “biggest boondoggle in Canadian construction history” (CBC News, 2022b). Initially slated to open in 2021, 
            the project was officially delayed in 2020 and 2022 due to Metrolinx’s mismanagement of their private consortium 
            (CBC News, 2020, 2022a; Standing Committee on Public Accounts, 2020). In May 2023, Metrolinx CEO Phil Verster pushed the 
            opening to 2024 (Ranger & Westoll, 2023), but by December, he reversed course, saying no new date would be announced 
            (Harvey, 2023b). Internal documents later revealed that the provincial government had directed Metrolinx to withhold 
            timeline updates from the public (Harvey, 2023a; Spurr, 2024).
        </p>

        <h3>Prolonged Transit Delays</h3>
        <p>
            As delays to the Eglinton Crosstown LRT continue to mount, construction significantly increased travel times for residents 
            of Little Jamaica. Both roadway and sidewalk lane reductions along Eglinton Avenue have been reported (Pitter et al., 2023b, 
            p. 42), and even Metrolinx has acknowledged that Crosstown LRT construction “can produce long delays [for buses], particularly 
            along Eglinton Avenue West” (Hertel et al., 2016, p. 30). Accounts from businesses further confirm that traffic congestion 
            in the area remained severe, with prolonged disruptions threatening the survival of local businesses (Dubsky, 2023). What was 
            initially framed as a short-term inconvenience had evolved into a prolonged restriction on transportation access for a vulnerable 
            community. 
        </p>

        <figure className="my-6 block lg:hidden">
            <Image src="/images/flyers.jpg" alt="TTC flyers" width={1600} height={900} className="rounded-md border" />
            <figcaption className="caption-muted">Flyers in Little Jamaica highlight frustration with long bus wait times, calling for transit lanes to improve service reliability</figcaption>
        </figure>

        <h3>Information Uncertainty for Businesses</h3>
        <p>
            Unsurprisingly, the absence of a credible timeline has severely eroded public confidence in the Eglinton Crosstown project; 
            a 2024 poll found that only 7% of respondents believed the line would open that year (Valentin, 2024). Economic theory 
            demonstrates that this kind of uncertainty can have profound effects on small businesses. Ghosal and Ye (2019) found that 
            uncertainty significantly reduces business activity, particularly among smaller firms. Unlike larger firms, small 
            businesses operate with thinner profit margins and have less capacity to absorb the risks of sunk or unrecoverable costs, 
            making them more reluctant to commit to capital investment or expansion.
        </p>

        <p>
            This dynamic is evident in Little Jamaica, where the commercial corridor is dominated by small, independently owned 
            businesses. Metrolinx’s poor communication and shifting timelines have forced local BIAs to delay their initiatives 
            (CBC News, 2022c), while the chair of the York–Eglinton BIA notes that the delays “cause constant uncertainty for 
            businesses” (Gray-Donald, 2025). Small restaurants such as Sheryl’s Caribbean Cuisine reflect this challenge, as 
            they struggled to make basic business plans when faced with unpredictable timelines (Brown, 2022). Together, 
            these conditions show how persistent delays create an environment of uncertainty that paralyses decision-making 
            and entrenches economic stagnation in Little Jamaica.
        </p>

        <figure className="my-6 block">
            <Image src="/images/sheryl.jpg" alt="Sheryl Bryan Phillips" width={1600} height={900} className="rounded-md border" />
            <figcaption className="caption-muted">
              Sheryl Bryan Phillips, owner of Sheryl&apos;s Caribbean Cuisine, laments “We want to make plans but how 
              can we plan in this kind of uncertainty? We&apos;re not sure, we don&apos;t know what&apos;s going to happen.” 
              (Photo from Brown, 2022)
            </figcaption>
        </figure>

        <h2>Transit-Induced Displacement</h2>
        <p>
            A further long-term consequence of the Eglinton Crosstown project is the risk of transit-induced gentrification and 
            displacement. Gentrification refers to the influx of higher-income residents into historically low- or middle-income 
            neighbourhoods, while displacement involves the often involuntary departure of existing residents and businesses. 
            As Zuk et al. (2018, pp. 39, 40) notes, public transit investments often lead to gentrification and displacement, 
            as rising property values attract higher-income residents while existing communities are pushed out.
        </p>

        <p>
            In Little Jamaica, however, gentrification has not taken place yet; rather, the neighbourhood is experiencing conditions 
            that precede gentrification, driven primarily by financialised landlords — firms that purchase and manage rental properties 
            for profit — who speculate on future gains through property acquisitions and redevelopment applications. These investments 
            are made in anticipation of rising land values and the eventual arrival of wealthier residents following the improved 
            connectivity that the Crosstown’s completion is expected to bring. This is evidenced from the sharp rise in activity from 
            financialised landlords in Eglinton West since Metrolinx first announced the Crosstown in 2007. Before the announcement, 
            such landlords accounted for just 20% of all units sold; by 2021, that figure had risen to 60% (Lewis, 2022, p. 32).
        </p>

        <figure className="my-6 block lg:hidden">
            <Image src="/images/citynotice.jpg" alt="City Notice for Building Development" width={1600} height={900} className="rounded-md border" />
            <figcaption className="caption-muted">A high-rise redevelopment notice in Little Jamaica is met with vandalised frustration — ‘Knock this down when they haven’t started building across the street in almost 4 years?!’</figcaption>
        </figure>

        <p>
            Unfortunately, property speculation has driven sharp increases in rents and property prices, intensifying displacement 
            pressures on Little Jamaica’s long-standing communities. Although affordable housing has been repeatedly identified as a 
            top community priority, between 2011 and 2021 property prices rose by 66%, far outpacing the 10% growth in household 
            incomes. Over roughly the same period (2006-2016), the neighbourhood’s overall population declined by 5%. The impact 
            was even more pronounced for the more economically vulnerable Black population, whose homeownership rate (26%) is far 
            below the city-wide figure (53%), as their numbers fell by 13%, a rate three times higher. (CP Planning, 2021, pp. 14, 15).
        </p>

        <p>
            Black-owned businesses have likewise been strained by rising commercial rents, with many reporting steady rent increases 
            from landlords (CP Planning, 2021, p. 17). As Gordon (2018, p. 46) observes, long-standing community grocery stores that 
            served the Black community such as People’s Choice and Fischer’s were forced to close due to escalating rents. By 2020, 
            roughly 140 businesses in the area had shut down (Bessonov, 2020), and of the 110 Black-owned businesses operating in 2016, 
            only 45 remained by 2021 (Draaisma, 2021). The loss of such essential businesses accelerates displacement by making it 
            increasingly unaffordable for Black, low-income residents to stay.
        </p>

        <figure className="my-6 block lg:hidden">
            <Image src="/images/forrent.jpg" alt="For rent outside Carribean Slice" width={1600} height={900} className="rounded-md border" />
            <figcaption className="caption-muted">For rent sign placed outside of the store ‘Caribbean Slice’, a Black-owned business</figcaption>
        </figure>

        <figure className="my-6 block lg:hidden">
            <Image src="/images/forlease.jpg" alt="For lease signs" width={1600} height={900} className="rounded-md border" />
            <figcaption className="caption-muted">Stores with ‘For Lease’ or ‘For Rent’ signs are common along Little Jamaica</figcaption>
        </figure>

        <p>
            In sum, the Eglinton Crosstown LRT has generated a range of negative externalities that have deepened Little Jamaica’s 
            pre-existing vulnerabilities. These burdens, combined with transit-driven displacement, have weakened the neighbourhood’s 
            cultural and economic foundations, particularly for its Black residents and businesses. Ironically, despite Metrolinx’s 
            stated aim of advancing transit equity for low-income and racialised communities, poor project management has instead 
            accelerated the erosion of the very community it intended to support.
        </p>

        <h2>Counterarguments and Responses</h2>
        <p>
            Nevertheless, some representatives from Metrolinx and the provincial and municipal governments may raise counterarguments 
            to the points outlined above. They may contend that a certain degree of noise and disruption is inevitable in any large-scale 
            infrastructure project. If similar externalities are experienced across other neighbourhoods, then claims of transit inequity 
            in Little Jamaica may be overstated. Furthermore, both levels of government have introduced measures intended to mitigate harm, 
            including financial support for affected businesses and investments aimed at slowing displacement in the area. Therefore, 
            the community has been adequately compensated for the temporary costs associated with construction. In the following sections, 
            I will respond to each of these counterarguments.
        </p>
        
        <h3>“Disruptions Are a Normal Cost of Infrastructure”</h3>
        <p>
            It is widely acknowledged that transit construction generates noise and vibrations due to the use of heavy machinery 
            (Metrolinx, n.d.). Across Toronto, residents face and generally accept a certain level of disruption as a necessary 
            trade-off for long-term transit improvements (Smee, 2024). If such externalities are common to infrastructure projects 
            across the city, then the argument that Little Jamaica has been uniquely disadvantaged warrants closer scrutiny.
        </p>

        <p>
            However, in practice, Metrolinx has demonstrated differential treatment across its projects. A useful point of comparison 
            is the Ontario Line, a rapid transit corridor running through downtown Toronto into the city’s east end. In Pape and 
            Riverdale, construction for the Ontario Line had only begun in 2023, yet a range of mitigation measures had already been 
            introduced at an early stage. In addition to existing noise barriers, Metrolinx has installed new noise walls and noise 
            blankets to reduce the impacts of piling, microtunneling shaft construction and utility relocation works (Metrolinx, 2024, 
            2025a, 2025b, p. 2). Temporary interventions, such as solid wood hoarding, have also been used to suppress 
            construction-related noise and dust during the installation of these barriers (Metrolinx, 2025c).
        </p>

        <figure className="my-6 block lg:hidden">
            <Image src="/images/noisebarrier.jpg" alt="Noise Barrier in Riverdale" width={1600} height={900} className="rounded-md border" />
            <figcaption className="caption-muted">Noise Barrier constructed in Riverdale by Metrolinx</figcaption>
        </figure>

        <figure className="my-6 block lg:hidden">
            <Image src="/images/noiseblanket.jpg" alt="Noise Blanket at Pape Avenue" width={1600} height={900} className="rounded-md border" />
            <figcaption className="caption-muted">Noise blankets being deployed at Pape Ontario Line construction site</figcaption>
        </figure>

        <p>
            Moreover, Metrolinx has been notably more proactive in deploying mitigation measures to support local businesses affected by the 
            Ontario Line construction. The agency publicly committed to developing business support strategies based on “lessons learned 
            from the Eglinton Crosstown LRT” (Toigo, 2023, p. 8) and has since worked directly with BIAs and their contractors to implement 
            additional wayfinding tools aimed at maintaining customer foot traffic (Metrolinx, 2025d, p. 2).
        </p>

        <figure className="my-6 block lg:hidden">
            <Image src="/images/papewayfinding.jpg" alt="Pape Wayfinding" width={1600} height={900} className="rounded-md border" />
            <figcaption className="caption-muted">Wayfinding measures were quickly deployed when construction blocked visibility of Storefronts in Pape Avenue</figcaption>
        </figure>

        <p>
            This contrast is particularly striking when viewed in light of the socio-economic differences between the two neighbourhoods. 
            Donolo (2022) provides a detailed account of the historical gentrification of Riverdale and its surrounding areas, and 
            2016 data shows that the average household income in South Riverdale was 15% higher than the citywide average 
            (City of Toronto, 2016, p. 3). Ultimately, the Ontario Line was able to benefit from lessons learned during the 
            Eglinton Crosstown project, resulting in a less disruptive delivery in a more affluent area. This outcome underscores an 
            inequitable distribution of transit burdens across Toronto, particularly when compared to the prolonged harms experienced by 
            vulnerable communities in Little Jamaica.
        </p>

        <h3>“Sufficient Compensation and Anti-Displacement Efforts”</h3>
        <p>
            On the other hand, Torontonian officials may argue that I have not acknowledged the efforts made by government bodies to 
            support the residents and businesses of Little Jamaica. Following the 2020 delay, the Ontario Ministry of Transportation 
            pledged $3 million in support for businesses affected by the ongoing construction (Draaisma, 2020b). This financial commitment 
            is often cited as evidence that appropriate compensation efforts have been undertaken.
        </p>

        <p>
            Furthermore, the City of Toronto has taken steps to slow gentrification and displacement in Little Jamaica. It designated 
            the neighbourhood as Toronto’s first official Cultural District and commissioned planning consultants to co-develop a 
            Cultural District Plan with local stakeholders (City of Toronto, 2021). Through community-led cultural mapping, identification 
            of heritage assets and temporary placemaking initiatives, the plan seeks to strengthen the area’s cultural identity and visibility 
            as a means of supporting community continuity (Pitter et al., 2023b). In addition, the City committed $113,000 toward 
            anti-displacement housing supports in Little Jamaica, along with $114,990 for community-led initiatives addressing gentrification 
            and housing insecurity among Black communities across Toronto (City of Toronto, 2023, p. 14).
        </p>

        <figure className="my-6 block lg:hidden">
            <Image src="/images/culturaldistrict.jpg" alt="Little Jamaica flyer" width={1600} height={900} className="rounded-md border" />
            <figcaption className="caption-muted">Poster promoting Multicultural Day in Little Jamaica’s Cultural District</figcaption>
        </figure>

        <p>
            Yet, local BIAs have argued that these financial supports were insufficient to tide businesses over the extended construction phase, 
            noting that no additional compensation has been offered since (Draaisma & Cheese, 2025). When businesses request for further 
            compensation with subsequent delays, Metrolinx commented that “they don’t have [funds for compensation]” for affected businesses 
            (Draaisma, 2020a). Moreover, of the $3 million pledged by the Ontario government in 2020, only $1.38 million was disbursed directly 
            to BIAs, while the remaining was allocated to cleaning services, window-washing and minimal promotional efforts (City of Toronto, 
            2022, p. 5). Furthermore, the allocation of that $1.38 million occurred without meaningful consultation with business owners 
            regarding how the funds should be used (Glover, 2022, 4:27). As a result, business closures remained common during the construction 
            delays between 2020 and 2022, particularly among long-established, local businesses (Heritage Toronto, 2022). Overall, this level 
            of support fell far short of what was needed to help businesses meaningfully withstand the financial strain of the construction 
            period.
        </p>

        <figure className="my-6 block">
            <Image src="/images/consultation.jpg" alt="Nick Alampi interview" width={1600} height={900} className="rounded-md border" />
            <figcaption className="caption-muted">‘Of that $3 million … they never asked us nor did they consult us,’ said Nick Alampi, chair of the York-Eglinton BIA (Photo from Glover, 2022)</figcaption>
        </figure>

        <p>
            Moreover, the Cultural District label offers Little Jamaica no binding housing or zoning safeguards (Sabeta, 2024, p. 110). 
            Residents and councillors repeatedly urged the City to designate the strip as a Heritage Conservation District, which would 
            have empowered Council to control alterations and prevent demolition of culturally significant buildings. However, no such 
            status was granted (Bozikovic, 2021; Danica, 2021). Officials defended the refusal by claiming “the built form of the Eglinton 
            strip didn’t seem to warrant heritage protection”, a rationale that contrasts sharply with the City’s decision to protect more 
            than 50 commercial buildings in the relatively affluent Leslieville that same year (Bozikovic, 2021). The disparity extends to 
            housing policy, as Little Jamaica was excluded from Toronto’s mandatory inclusionary zoning program, designed to secure 
            affordable units in new condo projects (Beattie, 2021). Taken together, these choices suggest the City’s anti-displacement 
            efforts are more symbolic than substantive, offering little real protection against gentrification and displacement.
        </p>

        <h2>Conclusion</h2>
        <p>
            The construction of the Eglinton Crosstown LRT has fallen short of Metrolinx’s equity goals. Sidewalk closures, hoarding and delays 
            have reduced storefront visibility, deterred foot traffic. disrupted travel and created uncertainty for residents and local 
            businesses. Concurrently, the project has accelerated displacement of the Black community, and while wealthier areas like 
            Riverdale received early mitigation measures, Little Jamaica saw minimal support. Finally, symbolic gestures like Cultural 
            District status were not matched with enforceable heritage or affordable-housing protections, and compensation programs have 
            been limited, poorly targeted and weakly consulted. Together, these outcomes reveal Metrolinx’s failure to embed equity in 
            transit delivery, leaving Little Jamaica to bear disproportionate harms from a project intended to benefit it.
        </p>

        <p>
            Word Count: 3000
        </p>
        </section>
        {/* === END ARTICLE BODY === */}


        {/* Bibliography */}
        <section id="bibliography" className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold">Bibliography</h2>
          <div className="mt-4 space-y-3 text-[0.98rem]">

            <p className="pl-6 -indent-6">
              Alamenciak, T. (2014, April 30). <i>Eglinton Crosstown LRT back on schedule, engineer says</i>. Toronto Star. http://www.thestar.com/news/gta/transportation/2014/04/30/eglinton_crosstown_lrt_back_on_schedule_engineer_says.html
            </p>

            <p className="pl-6 -indent-6">
              Baker, R., Gardener-Williams, D., Mark, A., Antczak, E., Dai, M., Ganton, S., & Wilson, T. (2020). <i>Report: A Black Business Conversation on Planning for the Future of Black Businesses and Residents on Eglinton Ave W</i>. Black Urbanism Toronto. https://www.butotest.com/wp-content/uploads/2024/02/BUSINESS-CONVERSATIONS-REPORT-2020-09-23.pdf
            </p>

            <p className="pl-6 -indent-6">
              Beattie, S. (2021, October 22). <i>Critics slam ‘ridiculous’; decision to exclude Little Jamaica from mandatory affordable housing plan</i>. CBC News. https://www.cbc.ca/news/canada/toronto/critics-slam-ridiculous-decision-to-exclude-little-jamaica-from-mandatory-affordable-housing-plan-1.6219721
            </p>

            <p className="pl-6 -indent-6">
              Bessonov, A. (2020, March 4). <i>Little Jamaica businesses suffer amid yet another delay in Eglinton LRT construction</i>. CBC News. https://www.cbc.ca/news/canada/toronto/little-jamaica-lrt-construction-1.5484610
            </p>

            <p className="pl-6 -indent-6">
              Black Business and Professional Association. (n.d.). <i>The Little Jamaica</i>. Retrieved 28 July 2025, from https://thelittlejamaica.com/
            </p>

            <p className="pl-6 -indent-6">
              Blackman, C., & Lintern, G. (2022). <i>Little Jamaica Initiative—Master Plan and Aligned Initiatives: Introduction and Status Report</i>. https://www.toronto.ca/legdocs/mmis/2022/ec/bgrd/backgroundfile-222764.pdf
            </p>

            <p className="pl-6 -indent-6">
              Bozikovic, A. (2021, April 7). <i>Is Toronto’s Little Jamaica history?</i> The Globe and Mail. https://www.theglobeandmail.com/canada/toronto/article-is-torontos-little-jamaica-history/
            </p>

            <p className="pl-6 -indent-6">
              Brown, D. (2022, September 27). <i>Latest Eglinton Crosstown delay ‘more trouble on trouble’ for Little Jamaica, restaurant owner says</i>. CBC News. https://www.cbc.ca/news/canada/toronto/eglinton-crosstown-lrt-delayed-1.6597314
            </p>

            <p className="pl-6 -indent-6">
              CBC News. (2019, February 7). <i>It’s a mess: Scarborough businesses struggling as Eglinton LRT construction drags on</i>. https://www.cbc.ca/news/canada/toronto/crosstown-metrolinx-lrt-eglinton-toronto-goldenmile-1.5007370
            </p>

            <p className="pl-6 -indent-6">
              CBC News. (2020, February 18). <i>Eglinton Crosstown LRT won’t be ready until ‘well into 2022,’ Metrolinx says</i>. CBC News. https://www.cbc.ca/news/canada/toronto/eglinton-crosstown-lrt-open-2022-1.5466847
            </p>

            <p className="pl-6 -indent-6">
              CBC News. (2022a, September 23). <i>Eglinton Crosstown LRT will be delayed by about a year, source says</i>. CBC News. https://www.cbc.ca/news/canada/toronto/eglinton-crosstown-lrt-behind-schedule-metrolinx-1.6593957
            </p>

            <p className="pl-6 -indent-6">
              CBC News. (2022b, December 9). <i>Councillors demand inquiry into Eglinton Crosstown, call it ‘boondoggle’ on national scale</i>. https://www.cbc.ca/news/canada/toronto/eglinton-crosstown-public-inquiry-1.6680565
            </p>

            <p className="pl-6 -indent-6">
              CBC News. (2022c, December 10). <i>Business owners demand ‘direct compensation’; as Eglinton Crosstown LRT delays continue</i>. CBC News. https://www.cbc.ca/news/canada/toronto/eglinton-delays-calls-for-business-compensation-1.6681169
            </p>

            <p className="pl-6 -indent-6">
              City of Toronto. (2016). <i>South Riverdale 2016 Neighbourhood Profile</i>. https://www.toronto.ca/ext/sdfa/Neighbourhood%20Profiles/pdf/2016/pdf1/cpa70.pdf
            </p>

            <p className="pl-6 -indent-6">
              City of Toronto. (2021, February 17). <i>Little Jamaica & the Eglinton West Neighbourhoods (Toronto, Ontario, Canada)</i>. City of Toronto. https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/eglinton-west-corridor-little-jamaica-study/
            </p>

            <p className="pl-6 -indent-6">
              City of Toronto. (2022). <i>Authority to Receive Funding from Metrolinx for Eglinton BIAs and Introduction of a new Transit Expansion Construction Mitigation Grant Program</i>. https://www.toronto.ca/legdocs/mmis/2022/ec/bgrd/backgroundfile-227770.pdf
            </p>

            <p className="pl-6 -indent-6">
              City of Toronto. (2023). <i>Toronto Action Plan to Confront Anti-Black Racism: Year Four Update</i>. https://www.toronto.ca/legdocs/mmis/2023/ec/bgrd/backgroundfile-236656.pdf
            </p>

            <p className="pl-6 -indent-6">
              City of Toronto (Director). (2025, May 28). <i>Managing Neighbourhood Traffic Issues: Eglinton Allen intersection & neighbourhood streets</i> [Video recording]. https://www.youtube.com/watch?v=otxaIoLEPds
            </p>

            <p className="pl-6 -indent-6">
              CP Planning. (2021). <i>Black Futures on Eglinton</i>. https://img1.wsimg.com/blobby/go/4cd413b4-f4ee-4988-bacf-4d6dd233bf9a/downloads/39e92170-0e68-463e-a15d-f17b2c37c674/BFoE-Report-5c6a662.pdf?ver=1753369341502
            </p>

            <p className="pl-6 -indent-6">
              Danica, S. (2021, March 9). <i>Residents want Little Jamaica named a heritage conservation district. The city says that’s ‘not the best fit’ for the area</i>. Toronto Star. https://www.thestar.com/news/gta/residents-want-little-jamaica-named-a-heritage-conservation-district-the-city-says-that-s-not/article_0520ed6d-afba-53b7-aa75-a976bce194b7.html
            </p>

            <p className="pl-6 -indent-6">
              Davis, H. G. (2022, April 13). <i>Where to find a ‘Little Jamaica’ in Canada</i>. National Geographic. https://www.nationalgeographic.com/travel/article/where-to-find-a-little-jamaica-in-canada
            </p>

            <p className="pl-6 -indent-6">
              Donolo, M. (2022). <i>Deindustrialization, Gentrification, and Displacement in Toronto’s Leslieville and South Riverdale</i>. https://qspace.library.queensu.ca/items/b8583285-60f8-4857-a3ac-261bb4995be3
            </p>

            <p className="pl-6 -indent-6">
              Doyle, M., Logan, M., Anders, B., Hoskins, J., Salatino, S., Sabzevari, M., Floro, E., Galli, L., Beck, R., Baptiste, S., Rossini, E., Li, S., Kulig, P., Romero, C., Atef, S., Wong, E., Cheung, J., Barnett, L., Hertel, S., … Kauffman, G. (2020a). <i>Eglinton West: Planning and Streetcape Study (No. Volume 1 & 2)</i>. https://www.toronto.ca/legdocs/mmis/2021/ey/bgrd/backgroundfile-166556.pdf
            </p>

            <p className="pl-6 -indent-6">
              Doyle, M., Logan, M., Anders, B., Hoskins, J., Salatino, S., Sabzevari, M., Floro, E., Galli, L., Beck, R., Baptiste, S., Rossini, E., Li, S., Kulig, P., Romero, C., Atef, S., Wong, E., Cheung, J., Barnett, L., Hertel, S., … Kauffman, G. (2020b). <i>Eglinton West: Planning and Streetcape Study (No. Volume 3)</i>. https://www.toronto.ca/legdocs/mmis/2021/ey/bgrd/backgroundfile-166557.pdf
            </p>

            <p className="pl-6 -indent-6">
              Draaisma, M. (2020a, February 24). <i>‘No pool of money’ exists to compensate Eglinton businesses amid LRT construction: Metrolinx</i>. CBC News. https://www.cbc.ca/news/canada/toronto/metrolinx-no-compensation-lost-business-eglinton-crosstown-lrt-delays-1.5473376
            </p>

            <p className="pl-6 -indent-6">
              Draaisma, M. (2020b, March 10). <i>Ontario minister pledges $3M to support Eglinton businesses amid LRT construction</i>. CBC News. https://www.cbc.ca/news/canada/toronto/ontario-transportation-minister-funding-support-eglinton-businesses-lrt-construction-1.5491908
            </p>

            <p className="pl-6 -indent-6">
              Draaisma, M. (2021, November 22). <i>Little Jamaica receives $1M federal grant to help it sustain Black-owned businesses</i>. CBC News. https://www.cbc.ca/news/canada/toronto/business-owners-little-jamaica-federal-grant-one-million-revitalization-1.6257709
            </p>

            <p className="pl-6 -indent-6">
              Draaisma, M., & Cheese, T. (2025, June 3). <i>Ford says Eglinton Crosstown LRT still on track to open in September 2025</i>. CBC News. https://www.cbc.ca/news/canada/toronto/eglinton-crosstown-september-opening-ontario-premier-doug-ford-1.7551404
            </p>

            <p className="pl-6 -indent-6">
              Dubsky, M. (2023, September 19). <i>LRT delays threatening their survival, Little Jamaica businesses say</i>. The Toronto Observer. https://torontoobserver.ca/2023/09/19/lrt-delays-threatening-their-survival-little-jamaica-businesses-say/
            </p>

            <p className="pl-6 -indent-6">
              Fleguel, J. (2023, January 21). <i>Toronto businesses ask for accountability from Metrolinx on Ontario Line subway</i>. CTVNews. https://www.ctvnews.ca/toronto/article/toronto-businesses-ask-for-accountability-from-metrolinx-on-ontario-line-subway/
            </p>

            <p className="pl-6 -indent-6">
              Ghosal, V., & Ye, Y. (2019). <i>The impact of uncertainty on the number of businesses</i>. Journal of Economics and Business, 105, 105840. https://doi.org/10.1016/j.jeconbus.2019.04.001
            </p>

            <p className="pl-6 -indent-6">
              Glover, C. (Director). (2022, April 30). <i>Will Toronto’s Little Jamaica survive a decade of transit construction?</i> [Video recording]. CBC News. https://youtu.be/z4t81lMhoK0?si=L7aQNdj92BUeoNqI
            </p>

            <p className="pl-6 -indent-6">
              Gordon, D. (2018). <i>The Erasure of Little Jamaica: Exploring the Role of Design in the Gentrification of Toronto’s Eglinton Avenue West</i>. http://hdl.handle.net/10315/35802
            </p>

            <p className="pl-6 -indent-6">
              Gray-Donald, D. (2025, February 21). <i>Metrolinx Shakes Little Jamaica. For 15 Years</i>. The Grind Magazine. https://www.thegrindmag.ca/metrolinx-shakes-little-jamaica-15-years/
            </p>

            <p className="pl-6 -indent-6">
              Harvey, L. (2023a, April 22). <i>Eglinton LRT: Why you still don’t know when the trains will run</i>. Toronto Star. https://www.thestar.com/news/gta/something-really-stinks-here-why-you-still-don-t-know-when-the-eglinton-lrt-will/article_b0470f10-c214-5f60-ab5f-c70f50f7f18f.html
            </p>

            <p className="pl-6 -indent-6">
              Harvey, L. (2023b, September 27). <i>Still no Eglinton Crosstown LRT opening date from Metrolinx</i>. Toronto Star. https://www.thestar.com/news/gta/metrolinx-refuses-to-say-when-long-delayed-eglinton-crosstown-lrt-might-finally-open/article_e6dabfdf-1030-538f-98de-d8017c988cfe.html
            </p>

            <p className="pl-6 -indent-6">
              Heritage Toronto. (2022). <i>Living history: Construction pandemic. Transit Troubles and Covid-19</i>. https://www.heritagetoronto.org/explore/little-jamaica-toronto-history/toronto-jamaica-construction-history/
            </p>

            <p className="pl-6 -indent-6">
              Hertel, S., Keil, R., & Collens, M. (2016). <i>Next Stop: Equity: Routes to fairer transit access in the Greater Toronto and Hamilton Area</i>. https://assets.metrolinx.com/image/upload/v1663240159/Documents/Metrolinx/Next_Stop_Equity_Routes_to_fairer_transit_access_in_the_GTHA.pdf
            </p>

            <p className="pl-6 -indent-6">
              Karner, A., London, J., Rowangould, D., & Manaugh, K. (2020). <i>From Transportation Equity to Transportation Justice: Within, Through, and Beyond the State</i>. https://doi.org/10.1177/0885412220927691
            </p>

            <p className="pl-6 -indent-6">
              Lewis, N. (2022). <i>The uneven racialized impacts of financialization</i>. The Office of the Federal Housing Advocate. https://www.homelesshub.ca/sites/default/files/attachments/Lewis-Financialization-Racialized-Impacts-ofha-en.pdf
            </p>

            <p className="pl-6 -indent-6">
              Mannsbach, A. (2016, March 16). <i>Toronto residents complain of non-stop noise from Eglinton Crosstown construction</i>. Post City News. https://postcity.com/residents-and-businesses-complain-of-non-stop-noise-from-eglinton-crosstown-construction/
            </p>

            <p className="pl-6 -indent-6">
              McLean, K. (2019, December 23). <i>‘There will be no Little Jamaica’: Toronto neighbourhood threatened by LRT construction</i>. Global News. https://globalnews.ca/news/6290487/toronto-little-jamaica-lrt-construction/
            </p>

            <p className="pl-6 -indent-6">
              McLean, K. (2020, August 1). <i>Coronavirus deals 2nd blow to businesses in Toronto’s construction-laden Little Jamaica</i>. Global News. https://globalnews.ca/news/7242711/coronavirus-struggle-little-jamaica-toronto/
            </p>

            <p className="pl-6 -indent-6">
              Metrolinx. (n.d.). <i>Noise and Vibration Management</i>. Retrieved 1 August 2025, from https://www.metrolinx.com/en/projects-and-programs/noise-and-vibration-management
            </p>

            <p className="pl-6 -indent-6">
              Metrolinx. (2017, October). <i>The Englinton Crosstown Light Rail Project</i>. https://us10.campaign-archive.com/?u=43cf0b1f84daab81ded9951c5&id=02f695a19a&e=67918bdda5
            </p>

            <p className="pl-6 -indent-6">
              Metrolinx. (2019, August 21). <i>New businesses support video for Eglinton Crosstown LRT</i>. https://www.metrolinx.com/en/discover/new-businesses-support-video-for--eglinton-crosstown-lrt
            </p>

            <p className="pl-6 -indent-6">
              Metrolinx. (2024). <i>Noise wall installation at Pape, Riverdale, and Langley Ave</i>. https://assets.metrolinx.com/image/upload/v1707404810/Images/Metrolinx/OLine_-_Noise_Wall_Installation_Notice_Extended_to_April_2024.pdf
            </p>

            <p className="pl-6 -indent-6">
              Metrolinx. (2025a). <i>Noise wall installation around Pape Station Site</i>. https://assets.metrolinx.com/image/upload/v1753128959/Images/Metrolinx/Ontario%20Line/Pape_Nosie_wall_OL_Notice_SoundWall.pdf
            </p>

            <p className="pl-6 -indent-6">
              Metrolinx. (2025b). <i>Pape-Riverdale (PJPS) Construction Liaison Committee (CLC) Meeting</i>. https://assets.metrolinx.com/image/upload/v1739204395/Images/Metrolinx/PAJPS_CLC_Jan_28_2025_Meeting_Notes.pdf
            </p>

            <p className="pl-6 -indent-6">
              Metrolinx. (2025c). <i>Retaining wall and noise barrier construction along the Lakeshore East rail corridor</i>. https://assets.metrolinx.com/image/upload/v1745871119/Images/Metrolinx/OL_LSEJC_Notice_NorthRW_Final.pdf
            </p>

            <p className="pl-6 -indent-6">
              Metrolinx. (2025d). <i>Update on Subcommittee on Metrolinx’s Ontario Line Construction Recommendations (TM2.1) (No. ATTACHMENT 2)</i>. https://www.toronto.ca/legdocs/mmis/2025/te/bgrd/backgroundfile-255613.pdf
            </p>

            <p className="pl-6 -indent-6">
              Nickle, D. (2021, September 27). <i>TIMELINE: A brief history of Toronto’s Eglinton Crosstown LRT project</i>. Toronto.Com. https://www.toronto.com/news/timeline-a-brief-history-of-torontos-eglinton-crosstown-lrt-project/article_3bcfe0b7-a1ae-5824-868d-d50967eb63c0.html
            </p>

            <p className="pl-6 -indent-6">
              Pitter, J., Badheytsang, G., Garrett, J. T., Hoang, C., Pharaon, L., Pyne, B., Wong, K., Sheppard, J., Ball, J., & Banks, A. (2023a). <i>Backgrounder A Deep Dive: Little Jamaica Cultural District Plan</i>. https://www.toronto.ca/wp-content/uploads/2023/12/8cfd-city-planning-little-jamaica-cultural-district-backgrounder.pdf
            </p>

            <p className="pl-6 -indent-6">
              Pitter, J., Badheytsang, G., Garrett, J. T., Hoang, C., Pharaon, L., Pyne, B., Wong, K., Sheppard, J., Ball, J., & Banks, A. (2023b). <i>Little Jamaica Cultural District Plan</i>. https://www.toronto.ca/wp-content/uploads/2024/01/9487-city-planning-little-jamaica-cultural-district-plan-final-report.pdf
            </p>

            <p className="pl-6 -indent-6">
              Potter, B. (2024, February 16). <i>Why we stopped building cut and cover</i>. Works in Progress Magazine Issue 14. https://worksinprogress.co/issue/why-we-stopped-building-cut-and-cover/
            </p>

            <p className="pl-6 -indent-6">
              Ranger, M., & Westoll, N. (2023, May 16). <i>Eglinton Crosstown won’t open until 2024, construction group to take legal action: Metrolinx</i>. CityNews Toronto. https://toronto.citynews.ca/2023/05/16/eglinton-crosstown-metrolinx-ttc-crosslinx/
            </p>

            <p className="pl-6 -indent-6">
              Sabeta, A. (2024). <i>The Erasure of a Black Sense of Place for Capital Accumulation: The Case of Little Jamaica</i>. Flux: International Relations Review, 14(2), 107–115. https://doi.org/10.26443/firr.v14i2.172
            </p>

            <p className="pl-6 -indent-6">
              Smee, M. (2024, October 10). <i>Toronto residents detail Metrolinx construction pains</i>. CBC News. https://www.cbc.ca/news/canada/toronto/toronto-residents-detail-metrolinx-construction-pains-1.7347131
            </p>

            <p className="pl-6 -indent-6">
              Spurr, B. (2018, March 24). <i>In a city desperate for more transit, for Toronto’s Little Jamaica it could be bad news</i>. Toronto Star https://www.thestar.com/news/gta/in-a-city-desperate-for-more-transit-for-toronto-s-little-jamaica-it-could-be/article_c7fa4cd6-6b35-5021-ad44-6bb6a8ce3134.html
            </p>

            <p className="pl-6 -indent-6">
              Spurr, B. (2024, August 1). <i>Premier Doug Ford’s office directed Metrolinx to keep Crosstown opening date secret, emails show</i>. Toronto Star. https://www.thestar.com/news/gta/premier-doug-fords-office-directed-metrolinx-to-keep-crosstown-opening-date-secret-emails-show/article_df708d0c-5016-11ef-be48-5308b787df04.html
            </p>

            <p className="pl-6 -indent-6">
              Standing Committee on Public Accounts. (2020). <i>Metrolinx – LRT Construction and Infrastructure Planning (Section 3.07, 2018 Annual Report of the Office of the Auditor General of Ontario)</i>. https://www.ola.org/sites/default/files/node-files/committee/report/pdf/2020/2020-02/42_1_Metrolinx-LRT_EN.pdf
            </p>

            <p className="pl-6 -indent-6">
              Toigo, D. (2023). <i>City of Toronto Recommendations for Metrolinx’s Ontario Line Construction within the Toronto and East York District</i>. https://www.toronto.ca/legdocs/mmis/2023/tm/bgrd/backgroundfile-238090.pdf
            </p>

            <p className="pl-6 -indent-6">
              Valentin, D. (2024, April 22). <i>Chow Approval Steady; Crosstown to open in 2026, Say 31% of Torontonians</i>. Liaison Strategies. https://press.liaisonstrategies.ca/chow-steady/
            </p>

            <p className="pl-6 -indent-6">
              Zuk, M., Bierbaum, A. H., Chapple, K., Gorska, K., & Loukaitou-Sideris, A. (2018). <i>Gentrification, Displacement, and the Role of Public Investment</i>. Journal of Planning Literature, 33(1), 31–44. https://doi.org/10.1177/0885412217716439
            </p>

          </div>
        </section>


        {/* Acknowledgments */}
        <section id="acknowledgments" className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold">Acknowledgments</h2>
          <p className="mt-4 text-[0.98rem] leading-7 text-justify">
            I am grateful to Selena (Heritage Toronto), whose insights during our engagement helped bring this issue into focus. 
            I would also like to thank Prof Bjorn, whose dedication and support made this ISC project possible. My thanks as 
            well to TAs Fiqri and Alayna, the GEx Toronto 2025 cohort and the NUS College staff for the invaluable opportunity 
            to travel abroad and immerse myself in Toronto’s rich culture. Finally, a special note of appreciation for the 
            recommendation of Randy’s Takeout, which I can personally confirm is &apos;bussin&apos;.
          </p>

          <figure className="my-6">
            <Image src="/images/groupphoto.jpg" alt="GEx group photo" width={1600} height={900} className="rounded-md border" />
            <figcaption className="caption-muted">GEx Toronto 2025</figcaption>
          </figure>
        </section>
      </article>

      {/* Sidebar Gallery */}
      <div className="hidden lg:block lg:pl-8 space-y-10">
        {/* Highlights */}
        <SidebarSection title="Highlights">

          <div className="space-y-10">
            <p className="border-l-4 border-[#002D72] pl-4 text-base italic leading-relaxed text-zinc-800 text-justify">
              By failing to adequately mitigate and compensate for prolonged construction, sidewalk
              closures, excessive noise and the resulting gentrification and displacement, Metrolinx has led a marginalised 
              community to disproportionately bear the negative externalities of infrastructure construction, while excluding 
              that very community from the long-term benefits it was meant to receive.
            </p>

            <p className="border-l-4 border-[#E87722] pl-4 text-base italic leading-relaxed text-zinc-800 text-justify">
              while wealthier areas like Riverdale received early mitigation measures, Little Jamaica saw minimal support. 
              Finally, symbolic gestures like Cultural District status were not matched with enforceable heritage or 
              affordable-housing protections, and compensation programs have been limited, poorly targeted and weakly 
              consulted. 
            </p>
          </div>
        </SidebarSection>

        {/* In Pictures */}
        {gallery.length > 0 && (
          <SidebarGallery items={gallery} onOpen={(it) => setOpen(it)} />
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={!!open}
        onClose={() => setOpen(null)}
        src={open?.src || ""}
        alt={open?.alt || ""}
        caption={open?.caption}
      />
    </div>
  );
}