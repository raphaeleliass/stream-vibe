import PlanCard from "@/components/Home/planCard";
import {
  Section,
  SectionDescription,
  SectionTitle,
} from "@/components/Section/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const pricingPlans = [
  {
    plan: "Basic",
    price: "$9.99/Month",
    content:
      "Access to a wide selection of movies and shows, including some new releases.",
    devices: "Watch on one device simultaneously",
    freeTrial: "7 Days",
    cancelAnytime: true,
    hdr: false,
    dolbyAtmos: false,
    adFree: false,
    offlineViewing: false,
    familySharing: false,
  },
  {
    plan: "Standard",
    price: "$12.99/Month",
    content:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content",
    devices: "Watch on Two devices simultaneously",
    freeTrial: "7 Days",
    cancelAnytime: true,
    hdr: true,
    dolbyAtmos: true,
    adFree: true,
    offlineViewing: "Yes, for select titles",
    familySharing: "Yes, up to 5 family members",
  },
  {
    plan: "Premium",
    price: "$14.99/Month",
    content:
      "Access to the widest selection of movies and shows, including all new releases and Offline Viewing",
    devices: "Watch on Four devices simultaneously",
    freeTrial: "7 Days",
    cancelAnytime: true,
    hdr: true,
    dolbyAtmos: true,
    adFree: true,
    offlineViewing: "Yes, for all titles",
    familySharing: "Yes, up to 6 family members",
  },
];

function Subscriptions() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Section className="flex w-full">
        <SectionTitle>Choose the plan that's right for you</SectionTitle>
        <SectionDescription>
          Join StreamVibe and select from our flexible subscription options
          tailored to suit your viewing preferences. Get ready for non-stop
          entertainment!
        </SectionDescription>
        <PlanCard />
      </Section>

      <Section className="md:hidden">
        <Tabs defaultValue="Standard">
          <TabsList className="w-full">
            {pricingPlans.map((plan) => (
              <TabsTrigger key={plan.plan} value={plan.plan} className="w-full">
                {plan.plan}
              </TabsTrigger>
            ))}
          </TabsList>
          {pricingPlans.map((content) => (
            <TabsContent key={content.plan} value={content.plan}>
              <Card>
                <CardHeader className="grid grid-cols-2 gap-12 space-y-0">
                  <span>
                    <CardDescription>Plan</CardDescription>
                    <p>{content.price}</p>
                  </span>

                  <span>
                    <CardDescription>Free Trial</CardDescription>
                    <p>{content.freeTrial}</p>
                  </span>

                  <span className="col-span-2">
                    <CardDescription>Content</CardDescription>
                    <p>{content.content}</p>
                  </span>

                  <span className="col-span-2">
                    <CardDescription>Devices</CardDescription>
                    <p>{content.devices}</p>
                  </span>
                </CardHeader>

                <CardContent className="grid grid-cols-2 gap-12">
                  <span>
                    <CardDescription>Cancel Anytime</CardDescription>
                    <p>{content.cancelAnytime ? "Yes" : "No"}</p>
                  </span>

                  <span>
                    <CardDescription>Cancel Anytime</CardDescription>
                    <p>{content.hdr ? "Yes" : "No"}</p>
                  </span>

                  <span>
                    <CardDescription>Cancel Anytime</CardDescription>
                    <p>{content.dolbyAtmos ? "Yes" : "No"}</p>
                  </span>

                  <span>
                    <CardDescription>Cancel Anytime</CardDescription>
                    <p>{content.adFree ? "Yes" : "No"}</p>
                  </span>
                </CardContent>

                <CardFooter className="grid grid-cols-2">
                  <span>
                    <CardDescription>Offline Viewing</CardDescription>
                    <p>{content.offlineViewing}</p>
                  </span>

                  <span>
                    <CardDescription>Family Sharing</CardDescription>
                    <p>{content.familySharing}</p>
                  </span>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </Section>

      <Section className="hidden md:flex">
        <Table>
          <TableCaption>A list of our plans.</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead>Features</TableHead>
              {pricingPlans.map((plans) => (
                <TableHead key={plans.plan} className="relative">
                  {plans.plan}
                  {plans.plan === "Standard" ? (
                    <span className="absolute left-20 rounded bg-red-500 px-1 py-px text-[10px] text-white">
                      Popular
                    </span>
                  ) : (
                    ""
                  )}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Price</TableCell>
              {pricingPlans.map((prices) => (
                <TableCell key={prices.plan}>{prices.price}</TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell>Content</TableCell>
              {pricingPlans.map((contents) => (
                <TableCell key={contents.plan}>{contents.content}</TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell>Devices</TableCell>
              {pricingPlans.map((devices) => (
                <TableCell key={devices.plan}>{devices.devices}</TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell>Free Trial</TableCell>
              {pricingPlans.map((trial) => (
                <TableCell key={trial.plan}>{trial.freeTrial}</TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell>Cancel Anytime</TableCell>
              {pricingPlans.map((cancel) => (
                <TableCell key={cancel.plan}>
                  {cancel.cancelAnytime ? "Yes" : "No"}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell>HDR</TableCell>
              {pricingPlans.map((hdr) => (
                <TableCell key={hdr.plan}>{hdr.hdr ? "Yes" : "No"}</TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell>Dolby Atmos</TableCell>
              {pricingPlans.map((dolby) => (
                <TableCell key={dolby.plan}>
                  {dolby.dolbyAtmos ? "Yes" : "No"}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell>Ad Free</TableCell>
              {pricingPlans.map((adFree) => (
                <TableCell key={adFree.plan}>
                  {adFree.adFree ? "Yes" : "No"}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell>Offline Viewing</TableCell>
              {pricingPlans.map((offline) => (
                <TableCell key={offline.plan}>
                  {offline.offlineViewing ? "Yes" : "No"}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell>Family Sharing</TableCell>
              {pricingPlans.map((familySharing) => (
                <TableCell key={familySharing.plan}>
                  {familySharing.familySharing ? "Yes" : "No"}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </Section>
    </main>
  );
}

export default Subscriptions;
