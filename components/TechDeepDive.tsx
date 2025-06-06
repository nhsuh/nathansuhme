import Accordion from '@components/Accordion';

export default function TechDeepDive() {
  return (
    <div className="space-y-6">
      <Accordion title="Grand Charter Architecture">
        {/* Replace with your diagram or code snippet */}
        <pre className="bg-neutral-800 dark:bg-neutral-900 text-neutral-100 p-4 rounded-lg text-sm overflow-x-auto">
{`graph TD
  NextJS -->|API| AWSLambda
  AWSLambda --> Postgres
  AWSLambda --> S3
  AWSLambda --> BedrockLLM`}
        </pre>
      </Accordion>
      <Accordion title="Capital One Cost Optimisation">
        <p>Reduced Lambda memory, batched Kinesis events, consolidated common code into shared layer.</p>
      </Accordion>
    </div>
  );
} 