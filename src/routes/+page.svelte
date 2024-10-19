<script>
    import { Card, Heading, P, Hr, Timeline, TimelineItem, Button, List, Li } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';

    /**
     * @param {{ preventDefault: () => void; currentTarget: any; }} event
     */
    function handleAnchorClick (event) {
		event.preventDefault()
		const link = event.currentTarget
		const anchorId = new URL(link.href).hash.replace('#', '')
		const anchor = document.getElementById(anchorId)
		window.scrollTo({
			// @ts-ignore
			top: anchor.offsetTop - 32,
			behavior: 'smooth'
		})
	}
</script>

<div id="home" class="lg:m-8 p-12 border-solid border-2 border-gray-950 rounded-lg bg-gray-400 dark:bg-gray-800">
    <Heading tag="h3" class="mb-4">First International Workshop on</Heading>
    <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">Quantum Data and Machine Learning:</Heading>
    <Heading tag="h2" class="mb-4">Systems, Theory and Hardware</Heading>
    <P>In conjunction with <a href="https://ieee-icde.org/2025/">ICDE 2025</a></P>
</div>

<div id="aims" class="lg:m-8 p-12 border-solid border-2 border-gray-950 rounded-lg bg-gray-400 dark:bg-gray-800">
    <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">Aims & Scope Page</Heading>
    <Hr classHr="my-16" />

    <Heading tag="h2" class="mb-4">Focus of the Workshop</Heading>
    <Hr classHr="my-8" />

    <Heading tag="h3" class="mb-4">Existing lack of knowledge</Heading>
    <P>In 2024, we attended both Q-Data@SIGMOD and QDSM@VLDB workshops. A key observation was the limited number of attendees. However, after delivering a quantum tutorial at ICDE 2024 and engaging in discussions at SIGMOD and VLDB, we received strong feedback indicating that many researchers in the data management and engineering community are eager to explore quantum-related topics but often lack foundational knowledge to get started.</P>
    <Hr classHr="my-8" class="bg-gray-700" />

    <Heading tag="h3" class="mb-4">Topic Overview</Heading>
    <P>QDML will cover topics not addressed by Q-Data and QDSM, such as data management systems for quantum computers and quantum internet, data encoding for quantum machine learning algorithms, and scientific data management for quantum experiments. These subjects align more closely with the expertise and interests of ICDE attendees and have the potential to foster emerging research in quantum data management and engineering.</P>
    <Hr classHr="my-8" />

    <Heading tag="h3" class="mb-4">Providing an entry point</Heading>
    <P>Unlike the other workshops, QDML will invite expert speakers to deliver tutorials that cover both theoretical and engineering fundamentals, providing an accessible entry point for ICDE attendees who are new to quantum computing.</P>
    <Hr classHr="my-8" />

    <Heading tag="h3" class="mb-4">Panel Discussion</Heading>
    <P>We plan to invite leaders from both industry and academia who have established strong academic partnerships, such as those from the Yonsei-IBM quantum ecosystem, Qutech at TU Delft, and potentially from other industry partners (e.g., Microsoft) to join us for a panel discussion focused on the practical challenges and future directions in quantum data management. This will offer valuable insights from those at the forefront of exploring quantum computing in real-world data management contexts.</P>
    <Hr classHr="my-16" />
    
    
    <Heading tag="h2" class="mb-4">Topics of Interest</Heading>
    <Hr classHr="my-8" />
    <P></P>

    <Heading tag="h3" class="mb-4">Quantum Data Management</Heading>
    <Hr classHr="my-8" />
    <List tag="ul" class="space-y-4 text-gray-900 dark:text-gray-200 mb-8">
        <Li>Database acceleration using quantum computing techniques</Li>
        <Li>Data management systems (DBMSs, data lakes, lakehouses) for quantum computers and quantum internet</Li>
        <Li>Hybrid quantum-classical data processing</Li>
        <Li>Data processing for developing quantum hardware</Li>
        <Li>Data management systems for classical simulation and quantum simulation</Li>
        <Li>Scientific data management for quantum experiments</Li>
    </List>

    <Heading tag="h3" class="mb-4">Quantum Machine Learning</Heading>
    <Hr classHr="my-8" />
    <List tag="ul" class="space-y-4 text-gray-900 dark:text-gray-200 mb-8">
        <Li>Quantum algorithms for machine learning tasks</Li>
        <Li>Data encoding for quantum machine learning algorithms</Li>
        <Li>Quantum learning theory</Li>
        <Li>Quantum-inspired machine learning</Li>
        <Li>Fuzzy logic for quantum machine learning</Li>
    </List>

    <Heading tag="h3" class="mb-4">Data Engineering for Quantum Error Correction</Heading>
    <Hr classHr="my-8" />
    <P class="mb-8">Data engineering methods and techniques to improve on quantum error correction</P>

    <Heading tag="h3" class="mb-4">Domain specific Applications</Heading>
    <Hr classHr="my-8" />
    <P class="mb-8">Application of quantum data management and quantum machine learning in domains like quantum sensing, quantum simulation and quantum chemistry, etc.</P>
</div>

<div id="dates" class="lg:m-8 p-12 border-solid border-2 border-gray-950 rounded-lg bg-gray-400 dark:bg-gray-800">
    <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">Submission Timeline</Heading>
    <Hr classHr="my-8" />

    <Timeline>
        <TimelineItem title="Paper Submission Deadline" date="February 4, 2025">
            <Button href="#submit" on:click={handleAnchorClick} color="alternative">Submit<ArrowRightOutline class="ms-2 w-5 h-5" /></Button>
        </TimelineItem>
        <TimelineItem title="Notification of Authors" date="March 4, 2025">
        </TimelineItem>
        <TimelineItem title="Camera-ready Version of accepted Papers" date="March 25, 2025">
        </TimelineItem>
        <TimelineItem title="Date of the Workshop" date="May 19, 2025">
        </TimelineItem>
    </Timeline>
</div>

<div id="committee" class="lg:m-8 p-12 border-solid border-2 border-gray-950 rounded-lg bg-gray-400 dark:bg-gray-800">
    <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">Committee</Heading>
    <Hr classHr="my-12" />

    <Heading tag="h2" class="mb-4">Organising Committee</Heading>
    <Hr classHr="my-8" />
    <div class="grid grid-cols-2 mb-16">
        <Card img="/img/people/rhai.png">
            <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rihan Hai</h3>
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Organiser</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Assistant Professor</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">@ University of Technology Delft, Netherlands</p>
            <Button href="https://rihanhai.com">
            Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
        </Card>

        <Card img="/img/people/kpark.png">
            <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Kwanghyun Park</h3>
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Organiser</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Assistant Professor</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">@ Yonsei University, South Korea</p>
            <Button href="https://cs.yonsei.ac.kr:59290/bbs/board.php?bo_table=eng2_1_a&wr_id=37">
            Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
        </Card>
    </div>

    <Heading tag="h2" class="mb-4">Workshop Chairs</Heading>
    <Hr classHr="my-8" />
    <div class="grid grid-rows-1 grid-cols-2 place-content-center divide-y">
        <Card img="/img/people/tlittau.png">
            <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tim Littau</h3>
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Publicity Chair</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">PhD student</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">@ University of Technology Delft, Netherlands</p>
            <Button href="https://tmlittau.github.io/tmlittau-portfolio">
            Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
            </Button>
        </Card>
    </div>
</div>

<div id="program" class="lg:m-8 p-12 border-solid border-2 border-gray-950 rounded-lg bg-gray-400 dark:bg-gray-800">
    <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">Program</Heading>
    <Hr classHr="my-8" />

    <Timeline>
        <TimelineItem title="Expert Keynote Talks" date="">
            <P>Keynote by invited experts from industry and/or academia (45 minutes each)</P>
        </TimelineItem>
        <TimelineItem title="Technical Presentation Session 1" date="">
            <P>First session of three technical presentations (15 - 25 minutes each)</P>
        </TimelineItem>
        <TimelineItem title="Technical Presentation Session 2" date="">
            <P>Second session of three technical presentations (15 - 25 minutes each)</P>
        </TimelineItem>
        <TimelineItem title="Technical Presentation Session 3" date="">
            <P>Third session of three technical presentations (15 - 25 minutes each)</P>
        </TimelineItem>
        <TimelineItem title="Panel Discussion" date="">
            <P>(one hour for the panel discussion)</P>
        </TimelineItem>
        <TimelineItem title="Socialising and Workshop Dinner" date="">
        </TimelineItem>
    </Timeline>

    <!-- Add in Flowbite Timeline for the Program -->
    <ul>
        <li>Invited keynote talks by one or two experts (industry or academia)</li>
        <li>6 - 10technical presentation in a total of 2 - 3 sessions</li>
        <li>Panel Discussion</li>
        <li>Socialising and Workshop Dinner</li>
    </ul>
</div>

<div id="submit" class="lg:m-8 p-12 border-solid border-2 border-gray-950 rounded-lg bg-gray-400 dark:bg-gray-800">
    <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">Submission Guidelines</Heading>
    <Hr classHr="my-8" />

    <P>
    The workshop will accept both regular papers and short papers (work in progress, vision/outrageous ideas).
    The page limit for regular papers is 6 pages, and for short papers is 4 pages with unlimited references. 
    The papers will be uploaded as PDF files to the review system. Each paper will be reviewed by at least three reviewers from the program committee (PC).
    We will apply the same principles for handling conflicts of interest with PC members or workshop chairs at the ICDE conference.
    We plan to invite a diverse, world-class program committee of about 10-15 experts in the domains of data management and engineering, data science, quantum information and quantum computing, and quantum machine learning. 
    </P>
</div>

<div id="papers" class="lg:m-8 p-12 border-solid border-2 border-gray-950 rounded-lg bg-gray-400 dark:bg-gray-800">
    <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">Accepted Papers</Heading>
    <Hr classHr="my-8" />
    <Heading tag="h3" class="mb-4" customSize="text-2xl font-extrabold  md:text-3xl lg:text-4xl">TBD</Heading>

</div>