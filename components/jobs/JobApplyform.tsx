
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { TextArea } from "../ui/textarea";

function JobApplyForm() {


  return (
    <div className="brutal-border lg:border-l-0 p-8">
      <h3 className="font-heading text-xl font-bold mb-6 border-b-3 border-foreground pb-4">
        APPLY NOW
      </h3>
      <div className="space-y-4">
        <Input type="hidden" name="jobId"  />
        <Input
          name="candidateName"
          label="FULL NAME"
          placeholder="YOUR NAME"
        />
        <Input
          name="candidateEmail"
          label="EMAIL"
          placeholder="YOUR@EMAIL.COM"
        />
        <Input
          name="candidateLinkedin"
          label="LINKEDIN"
          placeholder="LINKEDIN.COM/IN/..."
        />
        {/* TODO: add resume file upload */}
        <div>
          <label className="font-heading text-xs font-bold uppercase block mb-2">
            RESUME
          </label>
          <div className="brutal-border border-dashed border-3 p-8 text-center cursor-pointer hover:bg-accent/10 transition-none">
            <p className="font-mono text-sm font-bold">DROP FILE HERE</p>
            <p className="font-mono text-xs text-muted-foreground mt-1">
              PDF, DOC — MAX 5MB
            </p>
          </div>
        </div>
        <div>
          <label className="font-heading text-xs font-bold uppercase block mb-2">
            COVER NOTE
          </label>
          <TextArea
            name="candidateCoverLetter"
            placeholder="WHY THIS ROLE?"
          />
        </div>
        <Button variant="accent" className="w-full mt-4">
          SUBMIT APPLICATION →
        </Button>
      </div>
    </div>
  );
}

export default JobApplyForm;