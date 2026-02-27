type style = {
  bg: string;
  color: string;
  mt: number;
  borderRadius: "md" | "lg" | "full";
  p: number;
};

export interface IPropsButton {
  title: string;
  styles?: Partial<style>;
  _hover?: Partial<style>;
}
