import aztec from 'assets/images/aztec.jpeg';
import battlezips from 'assets/images/battlezips.png';
import blitz from 'assets/images/blitz.svg';
import rigor from 'assets/images/rigor.svg';
import pollenLabs from 'assets/images/pollen-labs.png';
import Typography from 'components/Typography';

export const PROJECTS = [
  {
    content: (
      <>
        Support for Pollen Labs and PSE from Mach34, including contributing to
        ideation, code review and development, and holistic engagement with
        advanced cryptography experiments.
      </>
    ),
    links: [
      { link: 'https://github.com/State-Channel-4', text: 'Channel 4' },
      { link: 'https://github.com/mach-34/grapevine', text: 'Grapevine' },
    ],
    logo: pollenLabs,
    title: 'Pollen Labs',
  },
  {
    content: (
      <>
        <div>
          Zybil is a Sybil resistance application built in the Aztec sandbox
          environment simulating the Aztec L2 rollup. Zybil users can “stamp”
          web2 and web3 identities like website accounts or ENS tokens privately
          and publicly produce a score that represents how likely they are to be
          a real person. Other Aztec smart contracts can utilize this
          functionality to gate access to functionality as desired. Zybil
          additionally demonstrates the round trip of Aztec’s L1/L2 messaging
          bridge by passing ownership of ENS tokens from L1 to L2 and posting
          merkle roots of owned stamps to EAS from L2 to L1.
        </div>
        <div style={{ marginTop: '24px' }}>
          Parts of Zybil were mocked to focus on the primary goal of proving the
          core features of the Aztec smart contract language. Zybil is
          constructed with future improvements in mind:
        </div>
        <ol>
          <li>
            Zybil could prove web3 data trustlessly using storage proofs derived
            from the L1 root in each L2 block. This will allow private proof of
            ownership of NFTs or other assets on Ethereum.
          </li>
          <li>
            Zybil could prove web2 data trustlessly by verifying JWT tokens
            inside of Noir, allowing totally anonymous and non-custodial proof
            of web2 accounts like emails or GitHub
          </li>
          <li>
            With the additional use of ZKEmail or TLSNotary, Zybil could attach
            high-trust data like birthdays or geolocation to provide additional
            identity checks without revealing such information when proving
            Sybil resistance
          </li>
        </ol>
      </>
    ),
    links: [{ link: 'https://github.com/mach-34/zybil', text: '' }],
    logo: aztec,
    title: 'Zybil',
  },
  {
    content: (
      <>
        Noir is a proof-agnostic high-level language for writing zero-knowledge
        applications in an experience as close to code as possible. While Noir
        transforms noir code to Barretenberg by default, it is explicitly built
        to have interchangeable backend proving systems. Mach 34 contributed to
        constructing a Halo2 backend for Noir, allowing existing Noir circuits
        to be seamlessly compiled into Halo2 proofs. This included CLI utilities
        to produce EVM verifiers to post Halo2 proofs written in Noir on
        blockchains.
      </>
    ),
    links: [{ link: 'https://github.com/ethan00/noir-halo2', text: '' }],
    logo: aztec,
    title: 'Noir-Halo2',
  },
  {
    content: (
      <>
        BattleZips-Halo2 is a starter/ toy example of application-specific logic
        in the Halo2 proving system, demonstrating how to arithmetize game logic
        inside low-level zero-knowledge proof libraries. The code is
        additionally packaged and implemented in a basic web application
        demonstrating the end-to-end use of Halo2 in production environments.
        <div style={{ marginTop: '16px' }}>
          <Typography style={{ color: '#10995A' }} variant='text5'>
            <b>Links</b>
          </Typography>
          <ul>
            <li>
              <a
                href='https://github.com/battlezips/battlezips-halo2'
                rel='noreferrer'
                target='_blank'
              >
                https://github.com/battlezips/battlezips-halo2
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
    logo: battlezips,
    title: 'BattleZips-Halo2',
  },
  {
    content: (
      <>
        <a href='https://rigor.build/'>Rigor</a> is a home construction ERP and
        invoice factoring solution settled on the Ethereum blockchain. Mach 34
        had the privilege of developing the proof of concept for Rigor as their
        first consultation. In the nearly 2 years since delivery, Rigor has
        raised over $3.5 million, hired an in-house dev team, and begun selling
        homes whose construction was financed and managed via Rigor's production
        beta software. Check out the video testimonial from the client to hear
        more about how Mach 34 can help you bring your innovative web3 product
        ideas into reality!
      </>
    ),
    logo: rigor,
    logoAlt: 'Rigor',
    title: 'Rigor',
    videoLink: 'https://www.youtube.com/embed/JW0tFoB8TBs',
    videoTitle: 'Rigor',
  },
  {
    content: (
      <>
        <a href='https://aztec.network/'>Aztec</a> is a pioneer in the world of
        zero-knowledge cryptography. They are the birthplace of the{' '}
        <a href='https://eprint.iacr.org/2019/953.pdf'>PlonK</a> proving system
        and the creators of{' '}
        <a href='https://aztec.network/connect'>Aztec Connect</a> (now sunset).
        Their latest contribution to the world of zero-knowledge cryptography is
        the creation of a new ZK DSL named{' '}
        <a href='https://noir-lang.org/'>Noir</a>. The language aims to relieve
        the burdenous tasks of learning the underlying mathematics and
        cryptographic principles that enable ZK. <br />
        <br /> Mach 34 was awarded a grant by Aztec to produce a video series
        and written documentation demonstrating how to write circuits in Noir
        and integrate them in a frontend application. We did this re-writing the{' '}
        <a href='https://github.com/BattleZips/BattleZips'>BattleZips</a>{' '}
        circuits from Circom into Noir.
      </>
    ),
    logo: aztec,
    logoAlt: 'Aztec',
    title: 'Aztec / BattleZips-Noir',
    videoLink:
      'https://www.youtube.com/embed/videoseries?list=PLabpoAlaCBY3SM6xHmZCOhPHlmLB4EY6H',
    videoTitle: 'BattleZips-Noir',
  },
  {
    content: (
      <>
        <a href='https://aztec.network/'>Aztec</a> is a pioneer in the world of
        zero-knowledge cryptography. They are the birthplace of the{' '}
        <a href='https://eprint.iacr.org/2019/953.pdf'>PlonK</a> proving system
        and the creators of{' '}
        <a href='https://aztec.network/connect'>Aztec Connect</a> (now sunset).
        Their latest contribution to the world of zero-knowledge cryptography is
        the creation of a new ZK DSL named{' '}
        <a href='https://noir-lang.org/'>Noir</a>. The language aims to relieve
        the burdenous tasks of learning the underlying mathematics and
        cryptographic principles that enable ZK. <br />
        <br /> Mach 34 was awarded a grant by Aztec to produce a video series
        and written documentation demonstrating how to write circuits in Noir
        and integrate them in a frontend application. We did this re-writing the{' '}
        <a href='https://github.com/BattleZips/BattleZips'>BattleZips</a>{' '}
        circuits from Circom into Noir.
      </>
    ),
    logo: blitz,
    logoAlt: 'Blitz',
    title: 'Blitz',
    videoHeader: `"...the product was a super competitive product on the
    market...would definitely recommend these guys if you're looking
    to build out a product in crypto or web3" - Myth, Owner of Blitz`,
    videoLink: 'https://www.youtube.com/embed/nH3AIaD_qYk',
    videoTitle: 'Blitz',
  },
  {
    content: (
      <>
        <a href='https://github.com/jp4g/battlezips'>BattleZips</a> is a
        demonstration of Zero Knowledge cryptography applied to layer 1 EVM
        contracts to play hidden information games in public execution
        environments. Written in Solidity, SnarkJS, and Circom, this stack was
        built as a demonstration to ourselves and others of our capability in
        applying zero knowledge to arbitrary business logic. BattleZips Privacy
        Stack presented February 2022 at EthDenver.
        <br />
        Disclaimer: The same individuals comprise the teams of Mach 34 and
        BattleZips, but BattleZips is not a Mach 34 project. No organization
        that affiliates with BattleZips should also be perceived as affiliating
        with Mach 34. BattleZips is open source as licensed under CC-BY-SA 4.0
        (V1) and GNU GPLv3 (V2).
        <br />
        <br />
        Services: Zero Knowledge, Cryptography, Smart Contracts, Subgraphs,
        Metatransactions, IPFS, R&D
      </>
    ),
    logo: battlezips,
    title: 'BattleZips Privacy Stack',
    videoHeader: (
      <>
        Won 6th out of 171 participating teams at{' '}
        <a href='https://dorahacks.io/grant/ethdenver22/top'>EthDenver 2022</a>
      </>
    ),
    videoLink: 'https://www.youtube.com/embed/wAFJ1mJO0d0',
    videoTitle: 'BattleZips',
  },
];
