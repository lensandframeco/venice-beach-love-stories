import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ImageGallery, type GalleryImage } from "@/components/ImageGallery";
const heroSilhouettes = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/ece97169-fa7f-42ee-b7ce-e4a5c444a21e.jpg";

// Import all gallery images organized by category from imageAssets catalog

// Documentary Subjects - Ivo (30 images)
const image1 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/2e54e904-594d-467c-b7c7-b88ce06afbad.jpg";
const image2 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/f26aa6be-9ac8-47e5-a9e4-af1dbda88ae7.jpg";
const image3 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/024670f8-7af0-4e2e-9ab1-dc5bc409706d.jpg";
const image8 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/7ffdf1ce-140c-4722-bbb5-771e6bc4e0b7.jpg";
const image12 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/8ac6cd95-5517-4969-adf6-5304d9b26210.jpg";
const image17 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/98050ac3-0624-4f8d-9e05-fc3a58683f3a.jpg";
const image19 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/19f39761-6de7-46b0-a243-ce3d839e9d58.jpg";
const image28 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/c0ac4c90-0fd4-4d4a-a22c-e50a3f1c9f89.jpg";
const image33 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/5bd62e15-ba96-412a-bb55-c20e127b3cab.jpg";
const image36 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/c89dcdcf-2844-4309-aef8-e346dcf11d57.jpg";
const image41 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/864e77af-8aba-4bb1-9522-26cf676fccaf.jpg";
const image42 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/a3b86d6a-3e79-49f3-b71f-1623d0675c6b.jpg";
const image46 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/839d4b77-5bd1-4467-a8b9-7c5492c3a785.jpg";
const image58 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/4c7227cc-ecd8-4ded-8ef6-ca99eb8454ee.jpg";
const image83 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/ec2f74a1-2c20-43f0-9502-09e273e25d7c.jpg";
const image90 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/e65dbe33-8f96-4f65-98aa-d1e068edb592.jpg";
const image101 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/6961ed8f-4105-4ecb-baef-3a03882b43d6.jpg";
const image103 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/cade4f28-2b11-48ae-a9d9-2a59b5d02202.jpg";
const image110 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/66c3beac-5dfa-4af3-9557-b6ea907789f8.jpg";
const image112 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/e1c184be-b3c1-40ae-bfc5-bb4b8b0eae96.jpg";
const image116 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/60a18f75-acdf-4562-9bc6-6f4cd6bb8795.jpg";
const image126 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/41792f25-9cb3-48db-90b8-744d2d1f95e5.jpg";
const image143 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/f14f67e5-32e5-4817-9d0b-f9d31869eed5.jpg";
const image147 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/b8f07256-aab4-461a-82e2-6fe29d84d1da.jpg";
const image149 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/c3393a3c-165e-48a9-9e55-c02bccd64c4b.jpg";
const image150 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/8880befa-bdd8-4707-995a-bff352e3e020.jpg";
const image152 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/9a5179b6-8b08-499c-ac3f-30987234ffa3.jpg";
const image155 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/38a63396-11a8-474a-9f26-58a80cd66fc1.jpg";
const image159 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/76700295-6862-44ec-b295-649ae283e5e5.jpg";
const image164 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/3a6d2782-0134-4439-921d-b71cd8e8af10.jpg";

// Documentary Subjects - Jataun (3 images)
const image29 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/cb14fc08-ef1d-4480-b4aa-9483f60ef304.jpg";
const image82 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/796e3b1e-4b78-4d2a-8ffc-9b6ac879011a.jpg";
const image160 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/f968b44c-8ebb-4f22-a674-f9d1ff642717.jpg";

// Documentary Subjects - Tito (3 images)
const image22 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/22188a48-3689-4c05-ab5d-4e57a5f1a631.jpg";
const image24 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/f60c6144-a99d-4ed0-b627-c4653ba45030.jpg";
const image88 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/dd4fdd52-da7d-4834-bc0f-8466249c128a.jpg";

// Documentary Subjects - Lance (14 images)
const image26 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/561e2528-4138-4d14-bfd0-4f688b125fe6.jpg";
const image57 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/ef149bc5-000a-40c5-9ef2-811978e3d645.jpg";
const image78 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/263bb10e-682d-44f4-9d00-a78824768875.jpg";
const image79 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/1afaae62-c711-4c69-9ca7-a03ac1364832.jpg";
const image98 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/e2108ef8-1ade-4c63-bdc5-6224802af6a1.jpg";
const image102 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/9dd2211d-ca00-40a0-ab59-082f211319f6.jpg";
const image111 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/81f529bb-00d7-4f1a-879f-9d3390b1a1d1.jpg";
const image122 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/f8fe3439-b6bb-478f-a526-3a7385c78b24.jpg";
const image131 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/299ca8f6-0c91-439e-9a56-fa934265f0d9.jpg";
const image146 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/cdb22094-50aa-42ce-bb0f-c0b809022999.jpg";
const image151 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/c39f7ae1-42ec-416b-8898-003edd7c1d92.jpg";
const image153 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/63e3b42a-909e-42bc-a502-4304e2a6b8e7.jpg";
const image161 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/f5e1a197-43e6-4b7d-8de6-463ed1b7319c.jpg";
const image163 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/ec9c02a8-7c99-4e24-a951-8a41cf81b821.jpg";

// Beach & Ocean (20 images)
const image16 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/d7ab3c50-4d62-418d-b847-27dfc2839961.jpg";
const image18 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/76d54f9f-85aa-4c80-ac1c-594731c7828c.jpg";
const image23 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/34dfa8e0-9164-45a2-ad0c-40b572698563.jpg";
const image31 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/91fff89d-ea77-4243-a21f-4cc2f7bf0681.jpg";
const image32 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/0e8f6a74-12df-4475-8d74-317a55126c12.jpg";
const image40 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/5c2d9928-1b24-4279-a739-0118ef6b062a.jpg";
const image45 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/8b9bd2e3-270d-4819-af72-2186e55291e0.jpg";
const image47 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/01b0d5c6-fcd5-433f-beae-ba401eb0b3b4.jpg";
const image49 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/cefdac24-c439-4a14-8f29-7a6ca201b49f.jpg";
const image52 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/6ba1c0ac-0306-44eb-b003-276b58cc05e0.jpg";
const image53 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/9b30cbcb-8a2d-4137-810d-b3d3821b4a91.jpg";
const image59 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/a7253673-a7e5-41e0-8dac-efdfe392388b.jpg";
const image75 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/703434dd-aecf-4b00-8bcc-c0af759b9ed6.jpg";
const image84 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/16ff754e-c89f-4234-b3a8-e09f98db4661.jpg";
const image96 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/dae629b3-e11d-46ed-bbca-b878b6534a66.jpg";
const image108 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/3a70853f-e123-4397-9201-0a77115ba1bb.jpg";
const image119 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/20110908-7d24-48ba-800c-d7e308803c6a.jpg";
const image120 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/90078e68-1105-4afa-852a-fe3dc4817383.jpg";
const image123 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/7c6d1cb1-2a82-454d-a54b-81c0c8d31165.jpg";
const image124 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/22ef32b2-293c-4073-a6ef-20f3354b39b4.jpg";

// Architecture (18 images)
const image5 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/1b1fff19-9fd3-4965-aae5-2f852f0e5674.jpg";
const image25 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/0df0e06f-dcaa-455b-99b3-19cf605e1225.jpg";
const image34 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/0cb1d2e4-10c1-4a50-a44b-4fa7b1b4109c.jpg";
const image48 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/b7d9a040-5723-41cc-b6b7-c5aec2c59488.jpg";
const image51 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/d4691f60-3d1f-404c-80cf-bbf7ff57ccb7.jpg";
const image60 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/b8d54a21-7d5d-4fed-acff-b1d4111eb92e.jpg";
const image64 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/045ac7ca-34ce-45cf-8c15-0e8ee10b6d8a.jpg";
const image65 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/84426a07-5cef-4acf-b483-9a2896a3c2bc.jpg";
const image67 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/d900a1e4-2b3d-4a99-a723-412472a0f10f.jpg";
const image68 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/2f7c4464-1b0b-47f5-81ae-3145f9ed5886.jpg";
const image69 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/1a83d553-c136-4fd2-a3de-bc9a6df0e75d.jpg";
const image71 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/ec65b431-5108-492d-a1c4-719a1f58b7a4.jpg";
const image80 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/c396148b-a582-42f7-9275-cde4aebb0553.jpg";
const image81 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/b9399e81-0224-4206-94e9-76bc9c18cd2c.jpg";
const image85 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/5fd91da5-dc91-43ae-b619-44f8bd5bf317.jpg";
const image86 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/f77f6710-622a-4fcb-8e3a-8198872be2a5.jpg";
const image99 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/4e7f2bff-f6e7-41b0-9e5d-e6bdaabd7dab.jpg";
const image104 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/4f8119f3-fa4f-44db-ba0f-13dd65661d08.jpg";

// Murals & Street Art (16 images)
const image7 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/5815b038-39b5-47f1-8b46-5d54222e1802.jpg";
const image13 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/6621067d-0e33-4b9b-87bb-433cc2508223.jpg";
const image15 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/008a303f-71e2-491a-9c57-f0b1a0e00e9e.jpg";
const image21 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/1a44e60e-ebc0-41b2-82f5-b91f6cf8701c.jpg";
const image30 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/d5a497f8-a65b-488e-8edd-6c92f70bbb14.jpg";
const image44 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/f50ffb53-3e56-4c2c-bc9f-5fc604316c24.jpg";
const image54 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/040512a9-0a9b-43a9-8626-9528cb92d012.jpg";
const image56 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/8a73cea0-0450-474f-8f62-cc18838645d5.jpg";
const image72 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/8ad0b5f2-9e23-41f7-8b09-959a8bd1e58d.jpg";
const image77 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/c3661e44-722c-4b01-8c7f-ff01c6601262.jpg";
const image87 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/e35b5633-bbee-41b4-a598-53bd6a42a6ed.jpg";
const image114 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/40eb13ec-e932-4d14-ba9f-4c0e40965adc.jpg";
const image115 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/eac1e8e7-4a90-4356-82b5-5fbc5b1ad893.jpg";
const image121 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/dc095543-b2cf-4c23-8d55-2bfd750b9fb9.jpg";
const image125 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/558d0394-3ac4-4af9-92ac-a9a03550c454.jpg";
const image134 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/777217ad-ae0b-4995-a11c-1189804cd140.jpg";

// Homelessness & Social Issues (9 images)
const image6 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/a64cf130-c485-4498-a051-0ba3fbf62368.jpg";
const image10 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/145ac369-1c8f-4519-b220-e9a6f9d6d057.jpg";
const image11 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/e9950a1d-a128-4e28-b7cf-37473a367c8f.jpg";
const image37 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/4a9ad50f-1975-4aa0-80de-8616d1d2a381.jpg";
const image38 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/cbcf43d5-2a65-4262-b34e-156190fc5576.jpg";
// Note: image39 not available
const image100 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/83d47ac1-852a-49bc-b3e3-4269fa0cb088.jpg";
// Note: image107 not available
const image141 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/dbe31cfa-0c4b-4109-8d1a-70815f324ab4.jpg";

// Gentrification (8 images)
const image9 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/ab5fbed1-c01d-428a-8537-f94357647cfc.jpg";
const image70 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/5c918769-571b-4825-9668-93d8e2adf5ce.jpg";
const image73 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/71281cf7-5719-4df0-bd42-e6bb75ec2815.jpg";
// Note: image127, image128 not available
const image135 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/01a01fb0-7537-4b06-834f-098c01a3d02b.jpg";
const image142 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/823ecf8b-430a-4330-80f5-be6a44c0b9d7.jpg";
const image145 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/6e4135e2-ebd0-4021-afd3-76ee21effaac.jpg";

// Venice Life (23+ images)
const image4 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/3627317f-4a30-4d05-8f65-d1c2ca620cbb.jpg";
const image14 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/b0adf99b-1b75-4014-b328-6e1b3dc90405.jpg";
const image20 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/752aa850-4a68-441d-94f3-9fdb0f341a93.jpg";
const image27 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/cc51334b-c465-42a7-9393-d2a4589a5d5c.jpg";
const image35 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/cab47ec2-2990-4aa9-ae7f-ee33e3165ff0.jpg";
const image43 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/e9eb167e-6448-4273-a6c6-f04436bc8344.jpg";
const image55 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/d73bbff1-dfa8-4b8a-a99d-eec04feab7ba.jpg";
const image61 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/254f45b0-43fb-45bc-ad9d-86bfcbfd9abc.jpg";
const image62 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/abc9a13c-8265-4b06-b41c-8ab6de6264eb.jpg";
const image63 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/84b79d8c-afab-4386-a84f-fc4657540cb9.jpg";
const image74 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/9efe6898-77eb-45b1-a094-ffee51990ea6.jpg";
const image76 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/e7ac3114-b7ee-4d9e-9573-ed11edba89b2.jpg";
const image89 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/0ec2dcd2-77b0-4a69-9140-8940bbecf6a3.jpg";
const image91 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/10d2aaca-4b5d-495a-b603-cb5d6eb6c9ca.jpg";
const image92 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/596b5187-e810-4050-9a70-ed772f775ec2.jpg";
const image95 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/07e4a0d4-2865-4ba0-8a73-c296b1cc2efd.jpg";
const image97 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/b7144df4-9fa7-4753-801e-6e984112553d.jpg";
const image105 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/34067739-c2ab-41b5-b69a-f55378bdf4e1.jpg";
const image109 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/73a366d5-5a09-4273-a9b0-4acff8656c63.jpg";

// Branding
const image148 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/14645469-c135-47e3-8799-ba26ef9ba949.jpg";

type MediaTab = 'photos' | 'video';
type CategoryFilter = 'all' | 'subjects' | 'beach' | 'architecture' | 'murals' | 'homelessness' | 'gentrification' | 'venice-life';

const categories: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'All Photos' },
  { id: 'subjects', label: 'Documentary Subjects' },
  { id: 'beach', label: 'Beach & Ocean' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'murals', label: 'Street Art & Murals' },
  { id: 'homelessness', label: 'Social Issues' },
  { id: 'gentrification', label: 'Gentrification' },
  { id: 'venice-life', label: 'Venice Life' },
];

// Gallery images organized by category with captions from the photo catalog
const galleryImages: Record<CategoryFilter, GalleryImage[]> = {
  subjects: [
    // Ivo - The Muralist (30 images)
    { src: image1, alt: 'Ivo Vergara - The Muralist', caption: 'Ivo Vergara, muralist from Chile who lives in Venice' },
    { src: image2, alt: 'Ivo at work', caption: 'Ivo at work' },
    { src: image3, alt: 'Ivo Vergara at work', caption: 'Ivo Vergara Chilean muralist at work' },
    { src: image8, alt: "Ivo's mural with community", caption: "Ivo's with members of the community depicted" },
    { src: image12, alt: 'Ivo at work on mural', caption: "Ivo at work on mural of Venice people's faces" },
    { src: image17, alt: 'Ivo and Tito', caption: 'Ivo at work. Tito Casillas in Zoot Suit' },
    { src: image19, alt: 'Ivo showing photos', caption: 'Ivo showing photos of family' },
    { src: image28, alt: 'Ivo painting mural', caption: 'Ivo at work on mural' },
    { src: image33, alt: 'Ivo at night', caption: 'Ivo at work at night on mural' },
    { src: image36, alt: "Ivo's paint", caption: "Ivo's paint" },
    { src: image41, alt: "Ivo's paint and mate", caption: "Ivo's paint and mate" },
    { src: image42, alt: 'Ivo working', caption: 'Ivo at work' },
    { src: image46, alt: "Ivo's mural art", caption: "Ivo's mural art" },
    { src: image58, alt: 'Ivo painting Jataun', caption: "Ivo painting Jataun's face on mural" },
    { src: image83, alt: 'Ivo being filmed', caption: 'Ivo being filmed in my office' },
    { src: image90, alt: 'Ivo working on Jataun', caption: 'Ivo working on Jataun at night' },
    { src: image101, alt: 'Ivo at outside mural', caption: 'Ivo at outside mural' },
    { src: image103, alt: "Ivo's mandala mural", caption: "Ivo's mandala mural" },
    { src: image110, alt: 'Mandala mural location', caption: 'Place where Ivo worked on mandala mural' },
    { src: image112, alt: 'Ivo working on mandala', caption: 'Ivo working on mandala mural' },
    { src: image116, alt: 'Ivo mural with subjects', caption: 'Ivo mural with Tito and Jataun' },
    { src: image126, alt: "Ivo's paints", caption: "Ivo's paints" },
    { src: image143, alt: 'Ivo on camera', caption: 'Ivo on camera in my office' },
    { src: image147, alt: 'Ivo being filmed', caption: 'Ivo being filmed by Chris mandala' },
    { src: image149, alt: 'Jataun blueprint', caption: 'Jataun blueprint for mural Ivo' },
    { src: image150, alt: 'Ivo mural covered', caption: 'Ivo mural covered up on Lincoln' },
    { src: image152, alt: 'Ivo with friend', caption: 'Ivo with friend' },
    { src: image155, alt: 'Ivo painting', caption: 'Ivo painting stuff' },
    { src: image159, alt: 'Ivo low angle', caption: 'Ivo painting low angle' },
    { src: image164, alt: 'Ivo Lincoln mural', caption: 'Ivo Lincoln mural on paper' },
    
    // Jataun - The Matriarch (3 images)
    { src: image29, alt: 'Jataun Valentine - The Matriarch', caption: "Jataun Valentine, community leader and activist" },
    { src: image82, alt: 'Jataun on mural', caption: 'Jataun Valentine on Mural' },
    { src: image160, alt: 'Jataun and friends', caption: 'Jataun and friends on street' },
    
    // Tito - The Zoot Suiter (3 images)
    { src: image22, alt: 'Tito Casillas - The Zoot Suiter', caption: 'Tito in Purple Zoot Suit' },
    { src: image24, alt: 'Tito on mural', caption: 'Tito on mural' },
    { src: image88, alt: 'Tito posing', caption: 'Tito striking a pose' },
    
    // Lance - The Bicycle Whisperer (14 images)
    { src: image26, alt: 'Lance - The Bicycle Whisperer', caption: 'Lance, Bicycle Whisperer' },
    { src: image57, alt: 'Lance and friends', caption: 'Lance and Danny and friend, bicycle whisperer' },
    { src: image78, alt: 'Danny at bicycle whisperer', caption: 'Danny at bicycle whisperer' },
    { src: image79, alt: 'Bicycle whisperer truck', caption: 'Bicycle whisperer truck' },
    { src: image98, alt: 'Lance portrait', caption: 'Lance the bicycle whisperer' },
    { src: image102, alt: 'Lance and camera', caption: 'Lance bicycle whisperer and camera' },
    { src: image111, alt: 'Bicycle whisperer van', caption: 'Bicycle whisperer van' },
    { src: image122, alt: 'Bicycle whisperer bikes', caption: 'Bicycle whisperer bikes' },
    { src: image131, alt: 'Lance smiling', caption: 'Lance bicycle whisperer big smile' },
    { src: image146, alt: 'Inside the van', caption: 'Bicycle whisperer inside van' },
    { src: image151, alt: 'Lance with friend', caption: 'Lance with friend' },
    { src: image153, alt: 'Bicycle whisperer van', caption: 'Bicycle whisperer van' },
    { src: image161, alt: 'Danny helper', caption: 'Danny, helper at bicycle whisperer' },
    { src: image163, alt: 'Lance on street', caption: 'Lance on street' },
  ],
  
  beach: [
    { src: image16, alt: 'Storm over Venice Beach', caption: 'Storm coming Venice Beach' },
    { src: image18, alt: 'Venice Beach path', caption: 'Path along Venice Beach' },
    { src: image23, alt: 'Near Tower 26', caption: 'Near Tower 26' },
    { src: image31, alt: 'Venice Beach at night', caption: 'Venice Beach at night' },
    { src: image32, alt: 'Venice Beach sunset', caption: 'Venice Beach sunset' },
    { src: image40, alt: 'People at dusk', caption: 'People at dusk at beach' },
    { src: image45, alt: 'Tracks in sand', caption: 'Tracks in sand at night Beach' },
    { src: image47, alt: 'Stationary bike riders', caption: 'Stationary Bike Riders at Beach' },
    { src: image49, alt: 'Bench at beach', caption: 'Bench at beach' },
    { src: image52, alt: 'Cement block at beach', caption: 'Cement block at beach' },
    { src: image53, alt: 'People walk at night', caption: 'People walk at beach night' },
    { src: image59, alt: 'Tower 26', caption: 'Tower 26' },
    { src: image75, alt: 'Silhouettes at beach', caption: 'Silhouette of people at beach' },
    { src: image84, alt: 'SM Pier', caption: 'SM Pier' },
    { src: image96, alt: 'Wave crash', caption: 'Wave crash at cement block at beach' },
    { src: image108, alt: 'Lonely beach', caption: 'Lonely beach' },
    { src: image119, alt: 'Blueish beach', caption: 'Blueish beach Venice' },
    { src: image120, alt: 'Man fishing', caption: 'Man fishing Venice' },
    { src: image123, alt: 'Fisherman baiting', caption: 'Fisherman at cement blocks baiting up' },
    { src: image124, alt: 'Venice in fog', caption: 'Cool photo of Venice Beach in fog' },
  ],
  
  architecture: [
    { src: image5, alt: 'Old time Venice Beach', caption: 'Old time Venice Beach' },
    { src: image25, alt: 'Venice Beach bungalows', caption: 'Venice Beach bungalows' },
    { src: image34, alt: 'Old car Venice', caption: 'Old car Venice Beach' },
    { src: image48, alt: 'Pink apartment', caption: 'Apartment pink at beach' },
    { src: image51, alt: 'Big modern house', caption: 'Big modern house in Venice' },
    { src: image60, alt: 'Modern home Venice', caption: 'Ghastly modern home Venice' },
    { src: image64, alt: 'Lights and palm trees', caption: 'Cool lights and palm trees at night' },
    { src: image65, alt: 'Bicycle and palms', caption: 'Bicycle and palm trees at night' },
    { src: image67, alt: 'Night skyline', caption: 'At night shot cool light skyline of apartments' },
    { src: image68, alt: 'Distant beach at night', caption: 'At night shot of distant beach' },
    { src: image69, alt: 'Apartment and sky', caption: 'Apartment and beautiful sky at night' },
    { src: image71, alt: 'Venice hotel', caption: 'Venice hotel on Rose and Lincoln' },
    { src: image80, alt: 'Small house at sunset', caption: 'Cool small house Venice at sunset' },
    { src: image81, alt: 'Old black car', caption: 'Old black car Venice' },
    { src: image85, alt: 'Venice plant store', caption: 'Venice plant store at night' },
    { src: image86, alt: 'Santa surfing yard', caption: 'Venice yard Santa surfing' },
    { src: image99, alt: 'Old car', caption: 'Old car Venice' },
    { src: image104, alt: 'New home Venice', caption: 'Hideous new home Venice' },
  ],
  
  murals: [
    { src: image7, alt: 'Venice mural', caption: 'Venice mural, not named' },
    { src: image13, alt: 'Painter unknown', caption: 'Painter unknown' },
    { src: image15, alt: 'Venice pole art', caption: 'Venice pole art' },
    { src: image21, alt: 'Mural', caption: 'Mural' },
    { src: image30, alt: 'Pole art', caption: 'Poll art' },
    { src: image44, alt: 'Pole art', caption: 'Pole art' },
    { src: image54, alt: 'Jim Morrison mural', caption: 'Jim Morrison mural Venice' },
    { src: image56, alt: 'Pole art', caption: 'Pole art' },
    { src: image72, alt: 'Ballet dancer mural', caption: 'Venice Freaky ballet dancing male on building' },
    { src: image77, alt: 'Touch of Evil mural', caption: 'Touch of Evil mural' },
    { src: image87, alt: 'Never fight a man sign', caption: 'Never fight a man with a perm sign' },
    { src: image114, alt: 'Lincoln street mural', caption: 'Lincoln street mural' },
    { src: image115, alt: 'Running with umbrella mural', caption: 'Running with umbrella mural Lincoln' },
    { src: image121, alt: 'Pole art', caption: 'Pole art' },
    { src: image125, alt: 'Angel statue', caption: 'Angel statue on lawn' },
    { src: image134, alt: 'Pole art', caption: 'Pole art' },
  ],
  
  homelessness: [
    { src: image6, alt: 'Lincoln trash', caption: 'Lincoln trash' },
    { src: image10, alt: 'Homeless camp', caption: 'Homeless camp Venice' },
    { src: image11, alt: 'Homeless encampment', caption: 'Homeless encampment Venice' },
    { src: image37, alt: 'Homeless tents', caption: 'Homeless tents Venice' },
    { src: image38, alt: 'Homeless camp', caption: 'Homeless camp Venice' },
    { src: image100, alt: 'Venice homeless camp', caption: 'Venice homeless camp' },
    { src: image141, alt: 'Venice homeless', caption: 'Venice homeless' },
  ],
  
  gentrification: [
    { src: image9, alt: 'Destruction for new house', caption: 'Destruction for 5M house Venice' },
    { src: image70, alt: 'New construction', caption: 'Venice new construction' },
    { src: image73, alt: 'New apartments', caption: 'Venice new apartments' },
    { src: image135, alt: 'Go home yuppies', caption: 'Go home yuppies graffiti' },
    { src: image142, alt: 'Strange dog sign', caption: 'Strange dog sign Venice' },
    { src: image145, alt: 'Resistance sign', caption: 'Resistance is your duty sign over highway' },
  ],
  
  'venice-life': [
    { src: image4, alt: 'Venice boardwalk scene', caption: 'Venice Beach boardwalk scene' },
    { src: image14, alt: 'Venice Beach life', caption: 'Venice Beach life' },
    { src: image20, alt: 'Venice Beach characters', caption: 'Venice Beach characters' },
    { src: image27, alt: 'Venice street scene', caption: 'Venice street scene' },
    { src: image35, alt: 'Venice neighborhood', caption: 'Venice neighborhood' },
    { src: image43, alt: 'Venice sunset life', caption: 'Venice Beach sunset life' },
    { src: image55, alt: 'Venice boardwalk', caption: 'Venice boardwalk' },
    { src: image61, alt: 'Venice community', caption: 'Venice community' },
    { src: image62, alt: 'Venice Beach scene', caption: 'Venice Beach scene' },
    { src: image63, alt: 'Venice Beach life', caption: 'Venice Beach life' },
    { src: image74, alt: 'Venice Beach scene', caption: 'Venice Beach scene' },
    { src: image76, alt: 'Venice street life', caption: 'Venice street life' },
    { src: image89, alt: 'Venice neighborhood life', caption: 'Venice neighborhood life' },
    { src: image91, alt: 'Venice community scene', caption: 'Venice community scene' },
    { src: image92, alt: 'Venice Beach characters', caption: 'Venice Beach characters' },
    { src: image95, alt: 'Venice Beach life', caption: 'Venice Beach life' },
    { src: image97, alt: 'Venice community', caption: 'Venice community' },
    { src: image105, alt: 'Venice scene', caption: 'Venice scene' },
    { src: image109, alt: 'Venice life', caption: 'Venice life' },
    { src: image148, alt: 'Venice Beach Love Stories sign', caption: 'Venice Beach Love Stories sign' },
  ],
  
  all: [], // Will be populated below
};

// Combine all images for 'all' category
galleryImages.all = [
  ...galleryImages.subjects,
  ...galleryImages.beach,
  ...galleryImages.architecture,
  ...galleryImages.murals,
  ...galleryImages.homelessness,
  ...galleryImages.gentrification,
  ...galleryImages['venice-life'],
];

// Placeholder video data - will be replaced with actual embeds
const videoPlaceholders = [
  { id: 1, title: 'The Muralist - Trailer', duration: '2:30' },
  { id: 2, title: 'The Matriarch - Interview', duration: '5:45' },
  { id: 3, title: 'The Skateboarder - In Action', duration: '3:15' },
  { id: 4, title: 'The Zoot Suiter - Portrait', duration: '4:00' },
  { id: 5, title: 'The Artist - Studio Visit', duration: '6:20' },
  { id: 6, title: 'Venice Beach - Atmosphere', duration: '2:00' },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<MediaTab>('photos');
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const currentImages = galleryImages[activeCategory];

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />

      {/* Hero - Tall */}
      <section className="relative hero-tall flex items-end film-grain">
        <div className="absolute inset-0">
          <img
            src={heroSilhouettes}
            alt="Venice Beach gallery"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative container-cinematic pb-20 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-sm uppercase tracking-widest text-accent mb-6">
              Visual Archive
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-overlay-light text-shadow-cinematic">
              Gallery
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Media Tabs */}
      <section className="py-12 md:py-16 bg-secondary border-b border-border">
        <div className="container-cinematic">
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-8 py-3 text-sm uppercase tracking-widest transition-all duration-300 border ${
                activeTab === 'photos'
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-transparent text-foreground border-border hover:border-primary'
              }`}
            >
              Photos
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`px-8 py-3 text-sm uppercase tracking-widest transition-all duration-300 border ${
                activeTab === 'video'
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-transparent text-foreground border-border hover:border-primary'
              }`}
            >
              Video
            </button>
          </div>

          {/* Category Filters (only for photos) */}
          {activeTab === 'photos' && (
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => {
                const count = galleryImages[category.id]?.length ?? 0;
                return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 text-sm uppercase tracking-widest transition-all duration-300 rounded-sm ${
                    activeCategory === category.id
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-background text-foreground hover:bg-muted'
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-xs opacity-75">
                    ({count})
                  </span>
                </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="page-section bg-background">
        <div className="container-cinematic">
          {activeTab === 'photos' ? (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-center text-muted-foreground mb-8">
                {currentImages.length} {currentImages.length === 1 ? 'photo' : 'photos'}
              </p>
              <ImageGallery 
                images={currentImages} 
                layout="masonry" 
                columns={3}
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-12">
                <p className="text-muted-foreground">
                  Video content coming soon. Check back for trailers, interviews, and behind-the-scenes footage.
                </p>
              </div>
              
              {/* Video Placeholder Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoPlaceholders.map((video) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-video bg-muted rounded-sm overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary transition-colors">
                          <Play className="w-6 h-6 text-primary-foreground ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 px-2 py-1 bg-foreground/80 text-background text-xs rounded">
                        {video.duration}
                      </div>
                    </div>
                    <h3 className="mt-3 font-medium text-foreground group-hover:text-accent transition-colors">
                      {video.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;